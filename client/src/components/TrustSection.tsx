import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SiGoogle, SiAmazon, SiNetflix, SiSpotify, SiAdobe, SiShopify, SiSlack, SiStripe } from 'react-icons/si';

const clients = [
  { icon: SiGoogle, name: 'Google' },
  { icon: SiAmazon, name: 'Amazon' },
  { icon: SiNetflix, name: 'Netflix' },
  { icon: SiSpotify, name: 'Spotify' },
  { icon: SiAdobe, name: 'Adobe' },
  { icon: SiShopify, name: 'Shopify' },
  { icon: SiSlack, name: 'Slack' },
  { icon: SiStripe, name: 'Stripe' },
];

const metrics = [
  { label: 'Projects Delivered', target: 500, suffix: '+' },
  { label: 'Client Satisfaction', target: 98, suffix: '%' },
  { label: 'Years Experience', target: 15, suffix: '+' },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <span className="font-heading font-bold text-5xl md:text-6xl text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
      {count}{suffix}
    </span>
  );
}

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="trust" className="py-24 px-8 relative" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8" data-testid="text-trust-title">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center p-4 rounded-lg hover-elevate transition-all duration-300 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/10"
                  data-testid={`logo-client-${index}`}
                >
                  <client.icon className="w-12 h-12 text-muted-foreground hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                data-testid={`metric-${index}`}
              >
                <AnimatedCounter target={metric.target} suffix={metric.suffix} isInView={isInView} />
                <p className="text-lg text-muted-foreground mt-2">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
