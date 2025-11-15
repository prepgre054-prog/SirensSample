import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolio1 from '@assets/stock_images/professional_marketi_80a92fd3.jpg';
import portfolio2 from '@assets/stock_images/professional_marketi_8f5b3e91.jpg';
import portfolio3 from '@assets/stock_images/professional_marketi_e21c2b67.jpg';
import portfolio4 from '@assets/stock_images/professional_marketi_38e94e18.jpg';
import portfolio5 from '@assets/stock_images/professional_marketi_09d08538.jpg';
import portfolio6 from '@assets/stock_images/professional_marketi_d6c288c6.jpg';

const projects = [
  { image: portfolio1, title: 'Brand Transformation', client: 'Tech Innovators' },
  { image: portfolio2, title: 'Digital Campaign', client: 'Growth Co' },
  { image: portfolio3, title: 'Web Experience', client: 'Modern Retail' },
  { image: portfolio4, title: 'Content Strategy', client: 'Creative Studios' },
  { image: portfolio5, title: 'Social Media', client: 'Lifestyle Brand' },
  { image: portfolio6, title: 'Marketing Analytics', client: 'Enterprise Solutions' },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-24 px-8 relative" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="text-portfolio-title">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped brands achieve remarkable growth and transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div
                className="group relative overflow-hidden rounded-lg hover-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 border border-primary/20"
                data-testid={`card-portfolio-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.client}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/90">{project.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
