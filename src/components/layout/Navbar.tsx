import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/partners', label: t('nav.partners') },
    { path: '/customers', label: t('nav.customers') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Always LTR layout for navbar structure */}
        <div className="flex items-center justify-between h-20" style={{ direction: 'ltr' }}>
          {/* Logo - Always on left */}
          <Link to="/" className="flex items-center gap-3 group no-flip">
            <img
              src={logo}
              alt="Alpha Core Solutions"
              className="h-12 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? 'active text-foreground' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu - Always on right */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="lang-toggle"
            >
              <Globe className="w-4 h-4 icon-no-flip" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        location.pathname === link.path
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;