import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Partners = () => {
  const { t } = useLanguage();
  const partnersRef = useRef(null);
  const isPartnersInView = useInView(partnersRef, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>Our Partners - Alpha Core Solutions | World-Leading Manufacturers</title>
        <meta name="description" content="We collaborate with world-leading manufacturers and technology providers to deliver best-in-class security and IT solutions." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('partners.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('partners.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Content */}
        <section className="py-24 bg-background" ref={partnersRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-12 text-center">
                <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-primary/10 flex items-center justify-center">
                  <Handshake className="w-12 h-12 text-primary" />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t('partners.text')}
                </p>
              </div>

              {/* Partner Placeholder Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[...Array(8)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="glass-card aspect-video flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isPartnersInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-full h-full bg-muted/30 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Partner Logo</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Partners;
