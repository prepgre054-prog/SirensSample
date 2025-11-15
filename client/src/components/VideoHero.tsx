import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface VideoHeroProps {
  isContentVisible: boolean;
  onExploreClick: () => void;
}

export function VideoHero({ isContentVisible, onExploreClick }: VideoHeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-950">
        {/* Uncomment when you add your video file to client/public/videos/hero-video.mp4 */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          <h1
            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
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
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8"
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
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
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
            className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/30"
            data-testid="button-explore-services"
          >
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
