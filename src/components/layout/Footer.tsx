import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/partners', label: t('nav.partners') },
    { path: '/customers', label: t('nav.customers') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const services = [
    t('services.physical.title'),
    t('services.detection.title'),
    t('services.military.title'),
    t('services.server.title'),
    t('services.monitoring.title'),
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Alpha Core Solutions"
                className="h-12 w-auto rounded-lg"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.about')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">{t('footer.links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@alphacs.sa" className="hover:text-primary transition-colors">
                  info@alphacs.sa
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://www.alphacs.sa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.alphacs.sa
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{t('footer.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Alpha Core Solutions. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
