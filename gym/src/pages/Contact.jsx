import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';
import ContactSection from '../components/sections/ContactSection';
import '../styles/global.css';

const Contact = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb 
        title="Contact Us"
        paths={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Contact us' }
        ]}
      />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Contact;

