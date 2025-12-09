import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';
import TeamPageSection from '../components/sections/TeamPageSection';
import '../styles/global.css';

const Team = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb 
        title="Our Team"
        paths={[
          { label: 'Home', link: '/' },
          { label: 'Our team' }
        ]}
      />
      <TeamPageSection />
      <Footer />
    </>
  );
};

export default Team;

