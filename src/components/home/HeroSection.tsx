import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, video will show poster
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback gradient background */}
        <div className={`absolute inset-0 bg-gradient-hero transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`} />
        
        {/* Video Overlay */}
        <div className="absolute inset-0 video-overlay" />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Alpha Core Solutions"
            className="h-24 md:h-32 w-auto mx-auto mb-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Divider */}
          <motion.div
            className="w-24 h-0.5 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Tagline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t('hero.tagline')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-primary font-medium tracking-widest mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/services" className="btn-hero">
              {t('hero.cta.services')}
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t('hero.cta.contact')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-wider">{t('hero.scroll')}</span>
            <ChevronDown className="w-6 h-6 scroll-indicator" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
