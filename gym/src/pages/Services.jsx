import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';
import ServicesSection from '../components/sections/ServicesSection';
import BannerSection from '../components/sections/BannerSection';
import PricingSection from '../components/sections/PricingSection';
import '../styles/global.css';

const Services = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb 
        title="Services"
        paths={[
          { label: 'Home', link: '/' },
          { label: 'Services' }
        ]}
      />
      <ServicesSection />
      <BannerSection />
      <PricingSection />
      <Footer />
    </>
  );
};

export default Services;

