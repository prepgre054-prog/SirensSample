import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  isContentVisible: boolean;
  onExploreClick: () => void;
}

export function HeroSection({ isContentVisible, onExploreClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-8"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          <h1
            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-primary mb-6 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            data-testid="text-agency-name"
          >
            Sirens
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8"
            data-testid="text-tagline"
          >
            Your One-Stop Marketing Agency
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your brand with our comprehensive marketing solutions. From strategy to execution, we deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button
            size="lg"
            onClick={onExploreClick}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
            data-testid="button-explore-services"
          >
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
