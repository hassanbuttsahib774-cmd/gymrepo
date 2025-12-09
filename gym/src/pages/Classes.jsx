import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';
import ClassesSection from '../components/sections/ClassesSection';
import '../styles/global.css';

const Classes = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb 
        title="Classes"
        paths={[
          { label: 'Home', link: '/' },
          { label: 'Classes' }
        ]}
      />
      <ClassesSection />
      <Footer />
    </>
  );
};

export default Classes;

