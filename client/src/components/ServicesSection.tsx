import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, FileText, BarChart3, Share2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Target,
    title: 'Brand Strategy',
    description: 'Develop a powerful brand identity that resonates with your target audience and sets you apart from competitors.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Drive growth with data-driven campaigns across SEO, PPC, and paid social media platforms.',
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Engage your audience with compelling content that tells your story and builds lasting connections.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Make informed decisions with comprehensive analytics and actionable insights into your marketing performance.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Build and nurture your community across all social platforms with authentic, engaging content.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Create stunning, high-performance websites that convert visitors into customers.',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 px-8 relative" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to elevate your brand and drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card
                className="h-full hover-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 bg-card/80 backdrop-blur-sm border-primary/20"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
