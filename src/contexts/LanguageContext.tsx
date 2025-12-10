import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.partners': 'Partners',
    'nav.customers': 'Customers',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.tagline': 'Securing the Kingdom',
    'hero.subtitle': 'INNOVATION • DEVELOPMENT • INTEGRATE VALUE',
    'hero.cta.services': 'Explore Services',
    'hero.cta.contact': 'Contact Us Now',
    'hero.scroll': 'Scroll to explore',

    // Why Alpha Core Section (NEW - Expanded)
    'whyacs.title': 'Why Alpha Core Solutions?',
    'whyacs.govt.title': 'Government Trusted',
    'whyacs.govt.desc': '15+ Years serving Saudi government ministries with unwavering commitment',
    'whyacs.certified.title': 'Certified Excellence',
    'whyacs.certified.desc': 'ISO 9001, ISO 27001, International security standards certified',
    'whyacs.response.title': '24/7 Rapid Response',
    'whyacs.response.desc': 'Emergency support team ready at all times with guaranteed response SLA',
    'whyacs.solutions.title': 'Comprehensive Solutions',
    'whyacs.solutions.desc': 'Physical security, IT infrastructure, detection equipment - everything under one trusted provider',

    // Impact Stats Section (NEW)
    'impact.title': 'Our Impact in Numbers',
    'impact.subtitle': 'Protecting what matters most to the Kingdom',
    'impact.projects': 'Projects Completed',
    'impact.years': 'Years Experience',
    'impact.uptime': 'Uptime Guaranteed',
    'impact.sites': 'Government Sites',
    'impact.devices': 'Devices Deployed',
    'impact.support': 'Support Available',

    // Core Capabilities Section (NEW)
    'capabilities.title': 'Core Capabilities',
    'capabilities.subtitle': 'End-to-end solutions for your most critical security needs',
    'capabilities.physical.title': 'Physical Security Systems',
    'capabilities.physical.desc': 'From design to deployment to maintenance - complete lifecycle security solutions.',
    'capabilities.physical.items': 'CCTV & Video Surveillance|Access Control & Biometrics|Perimeter Protection Systems|Intrusion Detection|Security Operations Centers (SOC)',
    'capabilities.detection.title': 'Detection & Screening',
    'capabilities.detection.desc': 'State-of-the-art screening technology for maximum security assurance.',
    'capabilities.detection.items': 'X-Ray Baggage Scanners|Walk-through Metal Detectors|Handheld Detection Devices|Explosive Trace Detection|Vehicle Scanning Systems',
    'capabilities.it.title': 'IT Infrastructure',
    'capabilities.it.desc': 'Complete IT ecosystem for secure government operations.',
    'capabilities.it.items': 'Enterprise Servers & Storage|Network Infrastructure|Workstations & Endpoints|Printers & Peripherals|System Integration',

    // Sectors Section (NEW)
    'sectors.title': 'Sectors We Protect',
    'sectors.subtitle': 'Trusted by critical infrastructure across Saudi Arabia',
    'sectors.government': 'Government Ministries',
    'sectors.healthcare': 'Healthcare Facilities',
    'sectors.airports': 'Airports & Ports',
    'sectors.corporate': 'Corporate Buildings',
    'sectors.infrastructure': 'Critical Infrastructure',
    'sectors.education': 'Educational Institutions',

    // Mission Section
    'mission.title': 'Our Mission',
    'mission.text': 'At Alpha Core Solutions, we provide comprehensive security and IT products tailored for the Kingdom\'s unique needs. We\'ve been the trusted partner for Saudi Arabia\'s government ministries for over 15 years. Our mission is simple yet profound: to provide world-class physical security solutions that give our clients absolute peace of mind. Through cutting-edge technology, expert deployment, and 24/7 support, we ensure that every person, asset, and facility under our protection is secured to the highest international standards. We are committed to innovation, reliability, and the safety of the Kingdom.',

    // Vision Section (NEW)
    'vision.title': 'Our Vision',
    'vision.text': 'To be the Kingdom\'s foremost authority in integrated security and IT solutions, setting the standard for excellence, innovation, and reliability in protecting critical infrastructure and government facilities across Saudi Arabia.',

    // Why Choose Us (Simple)
    'why.title': 'Why Choose Us',
    'why.trusted.title': 'Trusted',
    'why.trusted.desc': 'Government partner with proven track record',
    'why.comprehensive.title': 'Comprehensive',
    'why.comprehensive.desc': 'Full-spectrum security & IT solutions',
    'why.support.title': '24/7 Support',
    'why.support.desc': 'Round-the-clock monitoring and rapid response',

    // Stats
    'stats.years': 'Years',
    'stats.projects': 'Projects',
    'stats.uptime': 'Uptime',

    // About Page
    'about.hero.title': 'About Alpha Core Solutions',
    'about.hero.subtitle': 'Your Trusted Security Partner Since 2009',
    'about.story.title': 'Our Story',
    'about.story.text': 'Established in 2009, Alpha Core Solutions has emerged as Saudi Arabia\'s most trusted provider of physical security and IT infrastructure solutions. Our journey began with a simple vision: to protect the Kingdom\'s most critical assets through innovative technology and unwavering commitment to excellence.',
    'about.story.text2': 'Over the past decade and a half, we have had the privilege of securing over 50 government facilities, deploying more than 10,000 security devices, and maintaining a 99.9% uptime record across all our monitored sites. Our success is built on three pillars: cutting-edge technology, expert teams, and client-centric service.',
    'about.values.title': 'Our Core Values',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'We pursue excellence in every aspect of our work - from initial consultation to ongoing support. Our commitment to quality is unwavering.',
    'about.values.security': 'Security First',
    'about.values.security.desc': 'Security is not just our business - it\'s our responsibility. We treat every project with the gravity it deserves.',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'Transparency, honesty, and ethical conduct guide all our interactions. We build trust through consistent integrity.',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'We stay ahead of evolving threats by continuously adopting cutting-edge technologies and innovative approaches.',
    'about.whychoose.title': 'Why Choose Alpha Core Solutions?',
    'about.whychoose.experience': 'Proven Government Experience',
    'about.whychoose.experience.desc': 'Over 15 years serving Saudi ministries and government entities with hundreds of successful deployments. We understand the unique security requirements of government operations.',
    'about.whychoose.endtoend': 'End-to-End Solutions',
    'about.whychoose.endtoend.desc': 'From needs assessment and design through installation, training, and ongoing support - we handle everything. One trusted partner for all your security and IT needs.',
    'about.whychoose.certified': 'Certified & Compliant',
    'about.whychoose.certified.desc': 'ISO 9001 Quality Management, ISO 27001 Information Security, and full compliance with Saudi regulations and international security standards.',
    'about.whychoose.support': '24/7 Monitoring & Support',
    'about.whychoose.support.desc': 'Our Security Operations Center operates 24/7/365 with guaranteed response times. Emergency support team ready at all times for critical situations.',
    'about.whychoose.technology': 'Latest Technology',
    'about.whychoose.technology.desc': 'We partner with world-leading manufacturers to bring the most advanced security and IT equipment to Saudi Arabia. Always cutting-edge, never outdated.',
    'about.whychoose.local': 'Local Expertise, Global Standards',
    'about.whychoose.local.desc': 'Saudi-based team with deep understanding of local requirements, combined with international best practices and certifications.',
    'about.certifications.title': 'Certifications & Accreditations',
    'about.certifications.text': 'All certifications current and regularly audited to ensure continued compliance with the highest international standards.',

    // Services Page
    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'Comprehensive security and IT solutions tailored for critical infrastructure and government facilities.',
    'services.cta': 'Request a Custom Solution',
    'services.learnmore': 'Learn More',
    
    // Physical Security Service
    'services.physical.title': 'Physical Security Systems',
    'services.physical.desc': 'CCTV & Surveillance, Access Control, Perimeter Protection, Intrusion Detection',
    'services.physical.overview': 'Our comprehensive physical security systems provide multi-layered protection for your facilities, personnel, and assets. We design, deploy, and maintain integrated security solutions that combine video surveillance, access control, intrusion detection, and perimeter protection into a unified, manageable system.',
    'services.physical.overview2': 'With over 500 successful installations across government facilities, critical infrastructure, and corporate sites, we have the experience and expertise to secure even the most challenging environments.',
    'services.physical.cctv.title': 'CCTV & Video Surveillance',
    'services.physical.cctv.items': '4K Ultra HD and IP cameras|Intelligent video analytics (IVA)|License plate recognition (LPR)|Facial recognition integration|Night vision and thermal imaging|Video management software (VMS)|Cloud and on-premise recording|Mobile viewing capabilities',
    'services.physical.access.title': 'Access Control Systems',
    'services.physical.access.items': 'Biometric readers (fingerprint, facial, iris)|Smart card and proximity readers|Time and attendance integration|Multi-site management|Visitor management systems|Integration with HR databases|Emergency lockdown capabilities|Audit trails and reporting',
    'services.physical.intrusion.title': 'Intrusion Detection',
    'services.physical.intrusion.items': 'Motion sensors and detectors|Glass break sensors|Door and window contacts|Panic buttons and duress alarms|Integration with video verification|Zone-based alarm management|Mobile alert notifications|Police and emergency services integration',
    'services.physical.perimeter.title': 'Perimeter Protection',
    'services.physical.perimeter.items': 'Electric fences and barriers|Infrared beam detectors|Buried cable detection systems|Radar and microwave sensors|Anti-climbing and anti-cutting barriers|Integration with CCTV for verification|Weather-resistant outdoor equipment|Redundant power and communications',
    
    // Detection Equipment Service
    'services.detection.title': 'Detection Equipment',
    'services.detection.desc': 'Metal Detectors, X-Ray Screening, Baggage Scanners, Explosive Detection',
    'services.detection.overview': 'State-of-the-art detection and screening solutions for airports, government buildings, and high-security facilities. Our equipment meets international security standards and is designed for high-throughput environments.',
    'services.detection.items': 'X-Ray Baggage Scanners|Walk-through Metal Detectors|Handheld Detection Devices|Explosive Trace Detection (ETD)|Under-vehicle Inspection Systems|Cargo and Container Scanners',
    
    // Military Clothing Service
    'services.military.title': 'Military Clothing',
    'services.military.desc': 'Tactical Uniforms, Protective Gear, Combat Apparel, Military Supplies',
    'services.military.overview': 'High-quality military and tactical clothing designed for demanding environments. Our products meet military specifications and are trusted by defense forces.',
    'services.military.items': 'Tactical Uniforms|Ballistic Protection|Combat Boots|Helmets and Body Armor|Camouflage Apparel|Weather Protection Gear',
    
    // Server and PC Service
    'services.server.title': 'Server and PC Solutions',
    'services.server.desc': 'Enterprise Servers, Workstations & PCs, Network Infrastructure, IT Hardware',
    'services.server.overview': 'Complete IT infrastructure solutions including enterprise servers, workstations, and networking equipment. We provide design, deployment, and maintenance for mission-critical systems.',
    'services.server.items': 'Enterprise Servers|Workstations & PCs|Network Switches & Routers|Storage Solutions|Data Center Equipment|Backup Systems',
    
    // Printers Service
    'services.printers.title': 'Printers and Accessories',
    'services.printers.desc': 'Commercial Printers, Multifunction Devices, Printing Supplies, Maintenance',
    'services.printers.overview': 'Professional printing solutions for government and enterprise environments. From high-volume printers to secure document management.',
    'services.printers.items': 'Commercial Printers|Multifunction Devices|Label Printers|ID Card Printers|Printing Supplies|Maintenance Services',
    
    // 24/7 Monitoring Service
    'services.monitoring.title': '24/7 Monitoring & Support',
    'services.monitoring.desc': 'Real-time Surveillance, Emergency Response, Technical Support, Maintenance',
    'services.monitoring.overview': 'Our Security Operations Center operates 24/7/365, providing continuous monitoring, rapid incident response, and technical support for all deployed systems.',
    'services.monitoring.items': 'Real-time Video Monitoring|Alarm Response & Verification|Emergency Dispatch|Technical Support Hotline|Preventive Maintenance|System Health Monitoring',

    // Service Benefits
    'services.benefits.title': 'Key Benefits',
    'services.benefits.protection': 'Comprehensive Protection',
    'services.benefits.protection.desc': 'Real-time monitoring and instant alerts for any security breach',
    'services.benefits.integration': 'Integration & Automation',
    'services.benefits.integration.desc': 'All systems work together seamlessly for maximum effectiveness',
    'services.benefits.scalable': 'Scalable Solutions',
    'services.benefits.scalable.desc': 'Grow your security infrastructure as your needs expand',
    'services.benefits.compliance': 'Compliance Ready',
    'services.benefits.compliance.desc': 'Meet all government and industry regulatory requirements',
    'services.benefits.cost': 'Cost Effective',
    'services.benefits.cost.desc': 'Reduce security personnel costs while improving coverage',
    'services.benefits.remote': 'Remote Management',
    'services.benefits.remote.desc': 'Monitor and control from anywhere via secure connections',

    // Service Approach
    'services.approach.title': 'Our Approach',
    'services.approach.assessment': 'Assessment',
    'services.approach.assessment.desc': 'Comprehensive site survey and security risk analysis',
    'services.approach.design': 'Design',
    'services.approach.design.desc': 'Custom solution design meeting your specific requirements',
    'services.approach.deployment': 'Deployment',
    'services.approach.deployment.desc': 'Professional installation by certified technicians',
    'services.approach.training': 'Training',
    'services.approach.training.desc': 'Complete operator and administrator training',
    'services.approach.support': 'Support',
    'services.approach.support.desc': '24/7 monitoring, maintenance, and technical support',

    // Partners Page
    'partners.hero.title': 'Our Strategic Partners',
    'partners.hero.subtitle': 'We collaborate with world-leading manufacturers and technology providers to deliver best-in-class solutions.',
    'partners.intro': 'At Alpha Core Solutions, we believe in partnering with the world\'s best to deliver the best to our clients. Our strategic relationships with leading international manufacturers and technology providers ensure that we always offer cutting-edge solutions backed by global expertise and local support.',
    'partners.text': 'Our partners include international leaders in security technology and IT infrastructure.',
    'partners.categories.security': 'Security Technology Partners',
    'partners.categories.it': 'IT Infrastructure Partners',
    'partners.categories.detection': 'Detection Equipment Partners',

    // Customers Page
    'customers.hero.title': 'Trusted by Saudi Arabia\'s Government Ministries',
    'customers.hero.subtitle': 'Our clients trust us with their most critical security needs',
    'customers.text': 'From government ministries to sensitive facilities, we deliver protection that meets the highest standards. Our track record speaks for itself - over 15 years of successful partnerships with the Kingdom\'s most important institutions.',
    'customers.trust.years': 'Years of Service',
    'customers.trust.installations': 'Installations',
    'customers.trust.uptime': 'Uptime Rate',
    'customers.trust.satisfaction': 'Client Satisfaction',
    'customers.testimonial.title': 'What Our Clients Say',
    'customers.testimonial.text': 'Alpha Core Solutions has been an invaluable partner in securing our facilities. Their professionalism, technical expertise, and 24/7 support give us complete peace of mind.',

    // Contact Page
    'contact.hero.title': 'Contact Us',
    'contact.hero.subtitle': 'Get in touch with our team',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number (Optional)',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you! Your message has been sent.',
    'contact.info.email': 'Email',
    'contact.info.website': 'Website',
    'contact.info.location': 'Location',
    'contact.info.hours': 'Business Hours',
    'contact.info.hours.text': 'Saturday - Thursday: 8:00 AM - 5:00 PM',
    'contact.info.support': '24/7 Emergency Support Available',

    // Footer
    'footer.about': 'Securing the Kingdom with world-class physical security and IT solutions for over 15 years.',
    'footer.links': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.location': 'Kingdom of Saudi Arabia',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عنا',
    'nav.services': 'الخدمات',
    'nav.partners': 'الشركاء',
    'nav.customers': 'العملاء',
    'nav.contact': 'اتصل بنا',

    // Hero Section
    'hero.tagline': 'تأمين المملكة',
    'hero.subtitle': 'الابتكار • التطوير • القيمة المتكاملة',
    'hero.cta.services': 'استكشف الخدمات',
    'hero.cta.contact': 'اتصل بنا الآن',
    'hero.scroll': 'اسحب للاستكشاف',

    // Why Alpha Core Section (NEW - Expanded)
    'whyacs.title': 'لماذا ألفا كور سوليوشنز؟',
    'whyacs.govt.title': 'موثوق من قبل الحكومة',
    'whyacs.govt.desc': 'أكثر من 15 عامًا في خدمة الوزارات الحكومية السعودية بالتزام لا يتزعزع',
    'whyacs.certified.title': 'التميز المعتمد',
    'whyacs.certified.desc': 'ISO 9001، ISO 27001، معتمد بمعايير الأمن الدولية',
    'whyacs.response.title': 'استجابة سريعة على مدار الساعة',
    'whyacs.response.desc': 'فريق دعم الطوارئ جاهز في جميع الأوقات مع اتفاقية مستوى الخدمة المضمونة',
    'whyacs.solutions.title': 'حلول شاملة',
    'whyacs.solutions.desc': 'الأمن المادي، البنية التحتية لتكنولوجيا المعلومات، معدات الكشف - كل شيء تحت مزود موثوق واحد',

    // Impact Stats Section (NEW)
    'impact.title': 'تأثيرنا بالأرقام',
    'impact.subtitle': 'حماية ما يهم المملكة أكثر',
    'impact.projects': 'مشروع مكتمل',
    'impact.years': 'سنوات من الخبرة',
    'impact.uptime': 'وقت التشغيل المضمون',
    'impact.sites': 'موقع حكومي',
    'impact.devices': 'جهاز منشور',
    'impact.support': 'الدعم المتاح',

    // Core Capabilities Section (NEW)
    'capabilities.title': 'القدرات الأساسية',
    'capabilities.subtitle': 'حلول شاملة لاحتياجاتك الأمنية الأكثر أهمية',
    'capabilities.physical.title': 'أنظمة الأمن المادي',
    'capabilities.physical.desc': 'من التصميم إلى النشر إلى الصيانة - حلول أمنية شاملة لدورة الحياة الكاملة.',
    'capabilities.physical.items': 'كاميرات المراقبة بالفيديو|التحكم في الوصول والقياسات الحيوية|أنظمة حماية المحيط|كشف التسلل|مراكز عمليات الأمن (SOC)',
    'capabilities.detection.title': 'الكشف والفحص',
    'capabilities.detection.desc': 'أحدث تقنيات الفحص لضمان الأمن الأقصى.',
    'capabilities.detection.items': 'ماسحات الأمتعة بالأشعة السينية|أجهزة الكشف عن المعادن|أجهزة الكشف المحمولة باليد|كشف آثار المتفجرات|أنظمة فحص المركبات',
    'capabilities.it.title': 'البنية التحتية لتكنولوجيا المعلومات',
    'capabilities.it.desc': 'نظام بيئي متكامل لتكنولوجيا المعلومات للعمليات الحكومية الآمنة.',
    'capabilities.it.items': 'الخوادم والتخزين للمؤسسات|البنية التحتية للشبكات|محطات العمل والأجهزة الطرفية|الطابعات والملحقات|تكامل الأنظمة',

    // Sectors Section (NEW)
    'sectors.title': 'القطاعات التي نحميها',
    'sectors.subtitle': 'موثوق به من قبل البنية التحتية الحرجة في جميع أنحاء المملكة العربية السعودية',
    'sectors.government': 'الوزارات الحكومية',
    'sectors.healthcare': 'المرافق الصحية',
    'sectors.airports': 'المطارات والموانئ',
    'sectors.corporate': 'المباني المؤسسية',
    'sectors.infrastructure': 'البنية التحتية الحرجة',
    'sectors.education': 'المؤسسات التعليمية',

    // Mission Section
    'mission.title': 'مهمتنا',
    'mission.text': 'في ألفا كور سوليوشنز، نوفر منتجات أمنية وتكنولوجيا معلومات شاملة مصممة خصيصًا لاحتياجات المملكة الفريدة. لقد كنا الشريك الموثوق لوزارات الحكومة السعودية لأكثر من 15 عامًا. مهمتنا بسيطة ولكنها عميقة: توفير حلول أمنية مادية عالمية المستوى تمنح عملائنا راحة البال المطلقة. من خلال التكنولوجيا المتطورة والنشر الخبير والدعم على مدار الساعة، نضمن أن كل شخص وأصل ومنشأة تحت حمايتنا مؤمنة وفقًا لأعلى المعايير الدولية. نحن ملتزمون بالابتكار والموثوقية وسلامة المملكة.',

    // Vision Section (NEW)
    'vision.title': 'رؤيتنا',
    'vision.text': 'أن نكون السلطة الأولى في المملكة في الحلول الأمنية وتكنولوجيا المعلومات المتكاملة، ووضع معيار التميز والابتكار والموثوقية في حماية البنية التحتية الحرجة والمرافق الحكومية في جميع أنحاء المملكة العربية السعودية.',

    // Why Choose Us (Simple)
    'why.title': 'لماذا تختارنا',
    'why.trusted.title': 'موثوق به',
    'why.trusted.desc': 'شريك حكومي بسجل حافل',
    'why.comprehensive.title': 'شامل',
    'why.comprehensive.desc': 'حلول أمنية وتقنية متكاملة',
    'why.support.title': 'دعم على مدار الساعة',
    'why.support.desc': 'مراقبة واستجابة سريعة على مدار الساعة',

    // Stats
    'stats.years': 'سنة',
    'stats.projects': 'مشروع',
    'stats.uptime': 'وقت التشغيل',

    // About Page
    'about.hero.title': 'عن ألفا كور سوليوشنز',
    'about.hero.subtitle': 'شريكك الأمني الموثوق منذ 2009',
    'about.story.title': 'قصتنا',
    'about.story.text': 'تأسست ألفا كور سوليوشنز في عام 2009، وظهرت كأكثر مزود موثوق للحلول الأمنية المادية والبنية التحتية لتكنولوجيا المعلومات في المملكة العربية السعودية. بدأت رحلتنا برؤية بسيطة: حماية الأصول الأكثر أهمية في المملكة من خلال التكنولوجيا المبتكرة والالتزام الثابت بالتميز.',
    'about.story.text2': 'على مدى العقد والنصف الماضي، كان لنا شرف تأمين أكثر من 50 منشأة حكومية، ونشر أكثر من 10,000 جهاز أمني، والحفاظ على سجل وقت تشغيل بنسبة 99.9٪ في جميع مواقعنا المراقبة. يُبنى نجاحنا على ثلاثة أعمدة: التكنولوجيا المتطورة والفرق الخبيرة والخدمة التي تركز على العميل.',
    'about.values.title': 'قيمنا الأساسية',
    'about.values.excellence': 'التميز',
    'about.values.excellence.desc': 'نسعى للتميز في كل جانب من جوانب عملنا - من الاستشارة الأولية إلى الدعم المستمر. التزامنا بالجودة ثابت.',
    'about.values.security': 'الأمن أولاً',
    'about.values.security.desc': 'الأمن ليس مجرد عملنا - إنه مسؤوليتنا. نعامل كل مشروع بالجدية التي يستحقها.',
    'about.values.integrity': 'النزاهة',
    'about.values.integrity.desc': 'الشفافية والصدق والسلوك الأخلاقي يوجهون جميع تفاعلاتنا. نبني الثقة من خلال النزاهة المتسقة.',
    'about.values.innovation': 'الابتكار',
    'about.values.innovation.desc': 'نبقى في صدارة التهديدات المتطورة من خلال التبني المستمر للتقنيات المتطورة والأساليب المبتكرة.',
    'about.whychoose.title': 'لماذا تختار ألفا كور سوليوشنز؟',
    'about.whychoose.experience': 'خبرة حكومية مثبتة',
    'about.whychoose.experience.desc': 'أكثر من 15 عامًا من خدمة الوزارات والكيانات الحكومية السعودية مع مئات من عمليات النشر الناجحة. نحن نفهم متطلبات الأمان الفريدة للعمليات الحكومية.',
    'about.whychoose.endtoend': 'حلول شاملة',
    'about.whychoose.endtoend.desc': 'من تقييم الاحتياجات والتصميم من خلال التركيب والتدريب والدعم المستمر - نتعامل مع كل شيء. شريك موثوق واحد لجميع احتياجاتك الأمنية وتكنولوجيا المعلومات.',
    'about.whychoose.certified': 'معتمد ومتوافق',
    'about.whychoose.certified.desc': 'إدارة الجودة ISO 9001، أمن المعلومات ISO 27001، والامتثال الكامل للوائح السعودية ومعايير الأمن الدولية.',
    'about.whychoose.support': 'المراقبة والدعم على مدار الساعة',
    'about.whychoose.support.desc': 'يعمل مركز عمليات الأمن الخاص بنا على مدار الساعة طوال أيام الأسبوع مع أوقات استجابة مضمونة. فريق الدعم في حالات الطوارئ جاهز في جميع الأوقات للمواقف الحرجة.',
    'about.whychoose.technology': 'أحدث التكنولوجيا',
    'about.whychoose.technology.desc': 'نتشارك مع الشركات المصنعة الرائدة عالميًا لجلب أحدث معدات الأمن وتكنولوجيا المعلومات إلى المملكة العربية السعودية. دائمًا في الطليعة، أبدًا عفا عليها الزمن.',
    'about.whychoose.local': 'خبرة محلية، معايير عالمية',
    'about.whychoose.local.desc': 'فريق مقره في المملكة العربية السعودية مع فهم عميق للمتطلبات المحلية، جنبًا إلى جنب مع أفضل الممارسات الدولية والشهادات.',
    'about.certifications.title': 'الشهادات والاعتمادات',
    'about.certifications.text': 'جميع الشهادات حالية ويتم مراجعتها بانتظام لضمان الامتثال المستمر لأعلى المعايير الدولية.',

    // Services Page
    'services.hero.title': 'خدماتنا',
    'services.hero.subtitle': 'حلول أمنية وتكنولوجيا معلومات شاملة مصممة للبنية التحتية الحرجة والمرافق الحكومية.',
    'services.cta': 'اطلب حلاً مخصصاً',
    'services.learnmore': 'معرفة المزيد',

    // Physical Security Service
    'services.physical.title': 'أنظمة الأمن المادي',
    'services.physical.desc': 'كاميرات المراقبة، أنظمة التحكم بالدخول، حماية المحيط، كشف التسلل',
    'services.physical.overview': 'توفر أنظمة الأمن المادي الشاملة لدينا حماية متعددة الطبقات لمنشآتك وموظفيك وأصولك. نقوم بتصميم ونشر وصيانة حلول أمنية متكاملة تجمع بين المراقبة بالفيديو والتحكم في الوصول وكشف الاختراق وحماية المحيط في نظام موحد يمكن إدارته.',
    'services.physical.overview2': 'مع أكثر من 500 عملية تثبيت ناجحة عبر المرافق الحكومية والبنية التحتية الحرجة والمواقع المؤسسية، لدينا الخبرة والتجربة لتأمين حتى البيئات الأكثر تحديًا.',
    'services.physical.cctv.title': 'كاميرات المراقبة بالفيديو',
    'services.physical.cctv.items': 'كاميرات 4K فائقة الدقة وكاميرات IP|تحليلات الفيديو الذكية (IVA)|التعرف على لوحات الترخيص (LPR)|تكامل التعرف على الوجه|الرؤية الليلية والتصوير الحراري|برنامج إدارة الفيديو (VMS)|التسجيل السحابي والمحلي|إمكانيات العرض على الهاتف المحمول',
    'services.physical.access.title': 'أنظمة التحكم في الوصول',
    'services.physical.access.items': 'قارئات القياسات الحيوية (بصمة الإصبع، الوجه، القزحية)|بطاقات ذكية وقارئات القرب|تكامل الوقت والحضور|إدارة المواقع المتعددة|أنظمة إدارة الزوار|التكامل مع قواعد بيانات الموارد البشرية|إمكانيات الإغلاق الطارئ|سجلات التدقيق والتقارير',
    'services.physical.intrusion.title': 'كشف التسلل',
    'services.physical.intrusion.items': 'أجهزة استشعار وكشف الحركة|أجهزة استشعار كسر الزجاج|جهات اتصال الأبواب والنوافذ|أزرار الذعر وإنذارات الإكراه|التكامل مع التحقق بالفيديو|إدارة الإنذارات القائمة على المناطق|إشعارات التنبيه على الهاتف المحمول|التكامل مع خدمات الشرطة والطوارئ',
    'services.physical.perimeter.title': 'حماية المحيط',
    'services.physical.perimeter.items': 'الأسوار والحواجز الكهربائية|كاشفات الأشعة تحت الحمراء|أنظمة الكشف بالكابلات المدفونة|أجهزة استشعار الرادار والموجات الدقيقة|حواجز مضادة للتسلق والقطع|التكامل مع كاميرات المراقبة للتحقق|معدات خارجية مقاومة للطقس|طاقة واتصالات احتياطية',

    // Detection Equipment Service
    'services.detection.title': 'معدات الكشف',
    'services.detection.desc': 'أجهزة الكشف عن المعادن، أجهزة الفحص بالأشعة السينية، ماسحات الأمتعة، كشف المتفجرات',
    'services.detection.overview': 'أحدث حلول الكشف والفحص للمطارات والمباني الحكومية والمرافق عالية الأمان. تلبي معداتنا معايير الأمن الدولية ومصممة للبيئات ذات الإنتاجية العالية.',
    'services.detection.items': 'ماسحات الأمتعة بالأشعة السينية|أجهزة الكشف عن المعادن المشي من خلال|أجهزة الكشف المحمولة باليد|كشف آثار المتفجرات (ETD)|أنظمة فحص أسفل المركبات|ماسحات الشحن والحاويات',

    // Military Clothing Service
    'services.military.title': 'الملابس العسكرية',
    'services.military.desc': 'الزي التكتيكي، معدات الحماية، الملابس القتالية، المستلزمات العسكرية',
    'services.military.overview': 'ملابس عسكرية وتكتيكية عالية الجودة مصممة للبيئات الصعبة. تلبي منتجاتنا المواصفات العسكرية وموثوق بها من قوات الدفاع.',
    'services.military.items': 'الزي التكتيكي|الحماية الباليستية|الأحذية القتالية|الخوذات والدروع الواقية للجسم|ملابس التمويه|معدات الحماية من الطقس',

    // Server and PC Service
    'services.server.title': 'حلول الخوادم وأجهزة الكمبيوتر',
    'services.server.desc': 'خوادم المؤسسات، محطات العمل وأجهزة الكمبيوتر، البنية التحتية للشبكات، أجهزة تكنولوجيا المعلومات',
    'services.server.overview': 'حلول البنية التحتية الكاملة لتكنولوجيا المعلومات بما في ذلك خوادم المؤسسات ومحطات العمل ومعدات الشبكات. نقدم التصميم والنشر والصيانة للأنظمة ذات المهام الحرجة.',
    'services.server.items': 'خوادم المؤسسات|محطات العمل وأجهزة الكمبيوتر|مفاتيح الشبكة وأجهزة التوجيه|حلول التخزين|معدات مراكز البيانات|أنظمة النسخ الاحتياطي',

    // Printers Service
    'services.printers.title': 'الطابعات والملحقات',
    'services.printers.desc': 'الطابعات التجارية، الأجهزة متعددة الوظائف، مستلزمات الطباعة، الصيانة',
    'services.printers.overview': 'حلول طباعة احترافية للبيئات الحكومية والمؤسسية. من الطابعات ذات الحجم الكبير إلى إدارة المستندات الآمنة.',
    'services.printers.items': 'الطابعات التجارية|الأجهزة متعددة الوظائف|طابعات الملصقات|طابعات بطاقات الهوية|مستلزمات الطباعة|خدمات الصيانة',

    // 24/7 Monitoring Service
    'services.monitoring.title': 'المراقبة والدعم على مدار الساعة',
    'services.monitoring.desc': 'المراقبة في الوقت الفعلي، الاستجابة للطوارئ، الدعم الفني، الصيانة',
    'services.monitoring.overview': 'يعمل مركز عمليات الأمن الخاص بنا على مدار الساعة طوال أيام الأسبوع، ويوفر المراقبة المستمرة والاستجابة السريعة للحوادث والدعم الفني لجميع الأنظمة المنشورة.',
    'services.monitoring.items': 'مراقبة الفيديو في الوقت الفعلي|الاستجابة للإنذار والتحقق|الإرسال الطارئ|خط دعم فني|الصيانة الوقائية|مراقبة صحة النظام',

    // Service Benefits
    'services.benefits.title': 'الفوائد الرئيسية',
    'services.benefits.protection': 'حماية شاملة',
    'services.benefits.protection.desc': 'المراقبة في الوقت الفعلي والتنبيهات الفورية لأي خرق أمني',
    'services.benefits.integration': 'التكامل والأتمتة',
    'services.benefits.integration.desc': 'تعمل جميع الأنظمة معًا بسلاسة لتحقيق أقصى قدر من الفعالية',
    'services.benefits.scalable': 'حلول قابلة للتطوير',
    'services.benefits.scalable.desc': 'قم بتنمية بنيتك التحتية الأمنية مع توسع احتياجاتك',
    'services.benefits.compliance': 'جاهز للامتثال',
    'services.benefits.compliance.desc': 'تلبية جميع المتطلبات التنظيمية الحكومية والصناعية',
    'services.benefits.cost': 'فعال من حيث التكلفة',
    'services.benefits.cost.desc': 'تقليل تكاليف موظفي الأمن مع تحسين التغطية',
    'services.benefits.remote': 'الإدارة عن بُعد',
    'services.benefits.remote.desc': 'المراقبة والتحكم من أي مكان عبر اتصالات آمنة',

    // Service Approach
    'services.approach.title': 'نهجنا',
    'services.approach.assessment': 'التقييم',
    'services.approach.assessment.desc': 'مسح شامل للموقع وتحليل المخاطر الأمنية',
    'services.approach.design': 'التصميم',
    'services.approach.design.desc': 'تصميم حل مخصص يلبي متطلباتك المحددة',
    'services.approach.deployment': 'النشر',
    'services.approach.deployment.desc': 'تركيب احترافي من قبل فنيين معتمدين',
    'services.approach.training': 'التدريب',
    'services.approach.training.desc': 'تدريب كامل للمشغلين والمسؤولين',
    'services.approach.support': 'الدعم',
    'services.approach.support.desc': 'المراقبة والصيانة والدعم الفني على مدار الساعة',

    // Partners Page
    'partners.hero.title': 'شركاؤنا الاستراتيجيون',
    'partners.hero.subtitle': 'نتعاون مع الشركات المصنعة الرائدة عالميًا ومزودي التكنولوجيا لتقديم حلول من الدرجة الأولى.',
    'partners.intro': 'في ألفا كور سوليوشنز، نؤمن بالشراكة مع الأفضل في العالم لتقديم الأفضل لعملائنا. علاقاتنا الاستراتيجية مع الشركات المصنعة الرائدة الدولية ومزودي التكنولوجيا تضمن أننا نقدم دائمًا حلولًا متطورة مدعومة بالخبرة العالمية والدعم المحلي.',
    'partners.text': 'يشمل شركاؤنا قادة دوليين في تكنولوجيا الأمن والبنية التحتية لتكنولوجيا المعلومات.',
    'partners.categories.security': 'شركاء تكنولوجيا الأمن',
    'partners.categories.it': 'شركاء البنية التحتية لتكنولوجيا المعلومات',
    'partners.categories.detection': 'شركاء معدات الكشف',

    // Customers Page
    'customers.hero.title': 'موثوق به من قبل الوزارات الحكومية السعودية',
    'customers.hero.subtitle': 'يثق عملاؤنا بنا في احتياجاتهم الأمنية الأكثر أهمية',
    'customers.text': 'من الوزارات الحكومية إلى المرافق الحساسة، نقدم حماية تلبي أعلى المعايير. سجلنا يتحدث عن نفسه - أكثر من 15 عامًا من الشراكات الناجحة مع أهم مؤسسات المملكة.',
    'customers.trust.years': 'سنوات من الخدمة',
    'customers.trust.installations': 'تركيبات',
    'customers.trust.uptime': 'نسبة التشغيل',
    'customers.trust.satisfaction': 'رضا العملاء',
    'customers.testimonial.title': 'ماذا يقول عملاؤنا',
    'customers.testimonial.text': 'كانت ألفا كور سوليوشنز شريكًا لا يقدر بثمن في تأمين منشآتنا. احترافيتهم وخبرتهم الفنية ودعمهم على مدار الساعة يمنحوننا راحة البال الكاملة.',

    // Contact Page
    'contact.hero.title': 'اتصل بنا',
    'contact.hero.subtitle': 'تواصل مع فريقنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف (اختياري)',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.success': 'شكراً لك! تم إرسال رسالتك.',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.website': 'الموقع الإلكتروني',
    'contact.info.location': 'الموقع',
    'contact.info.hours': 'ساعات العمل',
    'contact.info.hours.text': 'السبت - الخميس: 8:00 صباحاً - 5:00 مساءً',
    'contact.info.support': 'دعم الطوارئ متاح على مدار الساعة',

    // Footer
    'footer.about': 'تأمين المملكة بحلول أمنية مادية وتكنولوجيا معلومات عالمية المستوى لأكثر من 15 عامًا.',
    'footer.links': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.location': 'المملكة العربية السعودية',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('preferredLang');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    // Set direction and lang on html element
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Save preference
    localStorage.setItem('preferredLang', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};