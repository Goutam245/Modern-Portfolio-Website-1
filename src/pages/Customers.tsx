import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Clock, TrendingUp, ThumbsUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Customers = () => {
  const { t } = useLanguage();
  const customersRef = useRef(null);
  const isCustomersInView = useInView(customersRef, { once: true, margin: "-100px" });

  const trustIndicators = [
    { icon: Clock, value: '15+', label: t('customers.trust.years') },
    { icon: Building2, value: '500+', label: t('customers.trust.installations') },
    { icon: TrendingUp, value: '99.9%', label: t('customers.trust.uptime') },
    { icon: ThumbsUp, value: '100%', label: t('customers.trust.satisfaction') },
  ];

  return (
    <>
      <Helmet>
        <title>Our Customers - Alpha Core Solutions | Trusted by Saudi Government</title>
        <meta name="description" content="Trusted by Saudi Arabia's government ministries for critical security needs. We deliver protection that meets the highest international standards." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('customers.hero.title')}
              </h1>
              <p className="text-xl text-primary font-medium">
                {t('customers.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Customers Content */}
        <section className="py-24 bg-background" ref={customersRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isCustomersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('customers.text')}
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-8 text-center group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isCustomersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <indicator.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {indicator.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{indicator.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Government Badge */}
            <motion.div
              className="mt-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={isCustomersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glass-card p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('customers.hero.subtitle')}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['ISO 27001', 'ISO 9001', 'SASO'].map((cert, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Customers;
