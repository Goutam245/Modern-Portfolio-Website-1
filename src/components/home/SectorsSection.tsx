import { Building2, Heart, Plane, Building, Factory, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SectorsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectors = [
    { icon: Building2, label: t('sectors.government') },
    { icon: Heart, label: t('sectors.healthcare') },
    { icon: Plane, label: t('sectors.airports') },
    { icon: Building, label: t('sectors.corporate') },
    { icon: Factory, label: t('sectors.infrastructure') },
    { icon: GraduationCap, label: t('sectors.education') },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('sectors.title')}</h2>
          <p className="section-subtitle mt-4">{t('sectors.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="sector-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <sector.icon className="w-10 h-10 text-primary mb-3 mx-auto" />
              <p className="text-sm font-medium text-foreground">{sector.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;