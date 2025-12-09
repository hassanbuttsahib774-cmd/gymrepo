import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';
import GalleryPageSection from '../components/sections/GalleryPageSection';
import '../styles/global.css';

const Gallery = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb 
        title="Gallery"
        paths={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Gallery' }
        ]}
      />
      <GalleryPageSection />
      <Footer />
    </>
  );
};

export default Gallery;

