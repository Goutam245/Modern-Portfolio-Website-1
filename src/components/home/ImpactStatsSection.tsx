import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const ImpactStatsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 500, suffix: '+', label: t('impact.projects') },
    { value: 15, suffix: '+', label: t('impact.years') },
    { value: 99.9, suffix: '%', label: t('impact.uptime') },
    { value: 50, suffix: '+', label: t('impact.sites') },
    { value: 10000, suffix: '+', label: t('impact.devices') },
    { value: 24, suffix: '/7', label: t('impact.support') },
  ];

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('impact.title')}</h2>
          <p className="section-subtitle mt-4">{t('impact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-compact glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              <p className="text-muted-foreground text-xs uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  value: number;
  suffix: string;
  isInView: boolean;
}

const Counter = ({ value, suffix, isInView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="stat-compact-number">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default ImpactStatsSection;