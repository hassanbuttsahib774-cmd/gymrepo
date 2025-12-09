import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import HeroSection from '../components/sections/HeroSection';
import ChoseUsSection from '../components/sections/ChoseUsSection';
import ClassesSection from '../components/sections/ClassesSection';
import BannerSection from '../components/sections/BannerSection';
import PricingSection from '../components/sections/PricingSection';
import GallerySection from '../components/sections/GallerySection';
import TeamSection from '../components/sections/TeamSection';
import '../styles/global.css';

const Home = () => {
  useEffect(() => {
    // Set background images
    const setBgElements = document.querySelectorAll('[data-setbg]');
    setBgElements.forEach((el) => {
      const bg = el.getAttribute('data-setbg');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <HeroSection />
      <ChoseUsSection />
      <ClassesSection />
      <BannerSection />
      <PricingSection />
      <GallerySection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Home;

