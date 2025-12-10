import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import WhyACSSection from '@/components/home/WhyACSSection';
import ImpactStatsSection from '@/components/home/ImpactStatsSection';
import SectorsSection from '@/components/home/SectorsSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alpha Core Solutions - Physical Security & IT Solutions in Saudi Arabia</title>
        <meta name="description" content="Leading provider of physical security systems, detection equipment, military clothing, IT solutions for Saudi government ministries. CCTV, metal detectors, x-ray machines, servers, 24/7 support." />
        <meta name="keywords" content="physical security, CCTV, metal detectors, x-ray machines, IT solutions, servers, printers, military clothing, Saudi Arabia, government security" />
        <link rel="canonical" href="https://www.alphacs.sa/" />
      </Helmet>
      <Layout>
        <HeroSection />
        <WhyACSSection />
        <ImpactStatsSection />
        <MissionSection />
        <SectorsSection />
      </Layout>
    </>
  );
};

export default Index;