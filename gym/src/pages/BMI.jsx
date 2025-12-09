import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';
import BMICalculatorSection from '../components/sections/BMICalculatorSection';
import '../styles/global.css';

const BMI = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb 
        title="BMI calculator"
        paths={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'BMI calculator' }
        ]}
      />
      <BMICalculatorSection />
      <Footer />
    </>
  );
};

export default BMI;

