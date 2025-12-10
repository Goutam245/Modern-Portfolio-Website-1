import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Scan, 
  Shirt, 
  Server, 
  Printer, 
  Headphones,
  ArrowRight
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const { t, isRTL } = useLanguage();
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: ShieldCheck,
      title: t('services.physical.title'),
      description: t('services.physical.desc'),
    },
    {
      icon: Scan,
      title: t('services.detection.title'),
      description: t('services.detection.desc'),
    },
    {
      icon: Shirt,
      title: t('services.military.title'),
      description: t('services.military.desc'),
      isNew: true,
    },
    {
      icon: Server,
      title: t('services.server.title'),
      description: t('services.server.desc'),
      isNew: true,
    },
    {
      icon: Printer,
      title: t('services.printers.title'),
      description: t('services.printers.desc'),
      isNew: true,
    },
    {
      icon: Headphones,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.desc'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Alpha Core Solutions | Security & IT Solutions</title>
        <meta name="description" content="Comprehensive security and IT solutions including physical security systems, detection equipment, military clothing, servers, printers, and 24/7 support." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('services.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('services.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background" ref={servicesRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {service.isNew && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full animate-glow-pulse">
                      NEW
                    </div>
                  )}
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary service-icon transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
                {t('services.cta')}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
