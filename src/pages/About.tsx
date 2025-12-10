import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, CheckCircle2, Shield, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { t } = useLanguage();
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      description: t('about.values.innovation.desc'),
    },
    {
      icon: CheckCircle2,
      title: t('about.values.reliability'),
      description: t('about.values.reliability.desc'),
    },
    {
      icon: Shield,
      title: t('about.values.security'),
      description: t('about.values.security.desc'),
    },
    {
      icon: Users,
      title: t('about.values.partnership'),
      description: t('about.values.partnership.desc'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Alpha Core Solutions | Your Trusted Security Partner</title>
        <meta name="description" content="Learn about Alpha Core Solutions, Saudi Arabia's trusted partner for physical security and IT solutions serving government ministries." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('about.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-card" ref={storyRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-primary text-sm font-medium tracking-wider uppercase">
                    {t('about.story.title')}
                  </span>
                </div>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                {t('about.story.text')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background" ref={valuesRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">{t('about.values.title')}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-8 text-center group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary service-icon transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
