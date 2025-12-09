import { Link } from 'react-router-dom';
import styles from '../../styles/BannerSection.module.css';
import bannerBg from '../../assets/img/banner-bg.jpg';

// Use placeholder background if actual image doesn't exist
// const bannerBg = 'https://via.placeholder.com/1920x550/0a0a0a/f36100?text=Banner';

const BannerSection = () => {
  return (
    <section 
      className={styles.bannerSection}
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className={styles.bsText}>
              <h2>registration now to get more deals</h2>
              <div className={styles.btTips}>Where health, beauty and fitness meet.</div>
              <Link to="/contact" className={`${styles.primaryBtn} ${styles.btnNormal}`}>
                Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

