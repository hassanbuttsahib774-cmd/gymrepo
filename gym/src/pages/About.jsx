import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';
import ChoseUsSection from '../components/sections/ChoseUsSection';
import AboutUsSection from '../components/sections/AboutUsSection';
import TeamSection from '../components/sections/TeamSection';
import BannerSection from '../components/sections/BannerSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import '../styles/global.css';

const About = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb 
        title="About us"
        paths={[
          { label: 'Home', link: '/' },
          { label: 'About' }
        ]}
      />
      <ChoseUsSection />
      <AboutUsSection />
      <TeamSection />
      <BannerSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default About;

