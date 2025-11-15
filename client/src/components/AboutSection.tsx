import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import teamImage from '@assets/stock_images/modern_office_settin_3617c45b.jpg';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-8 relative" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="text-about-title">
            About Sirens
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a team of creative strategists, designers, and marketers passionate about helping brands tell their stories and achieve exceptional growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-lg overflow-hidden aspect-video border border-primary/20">
            <img
              src={teamImage}
              alt="Sirens team collaborating in modern office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower brands with innovative marketing solutions that drive measurable results and create lasting impact in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We combine data-driven insights with creative excellence to deliver comprehensive marketing strategies tailored to your unique business goals.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
