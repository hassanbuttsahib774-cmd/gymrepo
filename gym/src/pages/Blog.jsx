import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';
import BlogSection from '../components/sections/BlogSection';
import '../styles/global.css';

const Blog = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb 
        title="Our Blog"
        paths={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Blog' }
        ]}
      />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blog;

