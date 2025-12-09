import { useEffect, useRef } from 'react';
import styles from '../../styles/AboutUsSection.module.css';
import aboutUsImg from '../../assets/img/about-us.jpg';

// Placeholder image
// const aboutUsImg = 'https://via.placeholder.com/800x640/151515/f36100?text=About+Us';

const AboutUsSection = () => {
  const bar1Ref = useRef(null);
  const bar2Ref = useRef(null);
  const bar3Ref = useRef(null);

  useEffect(() => {
    // Animate progress bars
    const animateBar = (ref, percentage) => {
      if (ref.current) {
        const fill = ref.current.querySelector('.fill');
        if (fill) {
          setTimeout(() => {
            fill.style.width = `${percentage}%`;
          }, 500);
        }
      }
    };

    animateBar(bar1Ref, 80);
    animateBar(bar2Ref, 85);
    animateBar(bar3Ref, 75);
  }, []);

  const handleVideoClick = (e) => {
    e.preventDefault();
    window.open('https://www.youtube.com/watch?v=EzKkl64rRbM', '_blank');
  };

  return (
    <section className={styles.aboutusSection}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div 
              className={styles.aboutVideo}
              style={{ backgroundImage: `url(${aboutUsImg})` }}
            >
              <a 
                href="https://www.youtube.com/watch?v=EzKkl64rRbM" 
                className={styles.playBtn}
                onClick={handleVideoClick}
              >
                <i className="fa fa-caret-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className={styles.aboutText}>
              <div className={styles.sectionTitle}>
                <span>About Us</span>
                <h2>What we have done</h2>
              </div>
              <div className={styles.atDesc}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                  viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
              <div className={styles.aboutBar}>
                <div className={styles.abItem}>
                  <p>Body building</p>
                  <div ref={bar1Ref} className={styles.barfiller}>
                    <span className="fill" data-percentage="80"></span>
                    <div className={styles.tipWrap}>
                      <span className={styles.tip}>80%</span>
                    </div>
                  </div>
                </div>
                <div className={styles.abItem}>
                  <p>Training</p>
                  <div ref={bar2Ref} className={styles.barfiller}>
                    <span className="fill" data-percentage="85"></span>
                    <div className={styles.tipWrap}>
                      <span className={styles.tip}>85%</span>
                    </div>
                  </div>
                </div>
                <div className={styles.abItem}>
                  <p>Fitness</p>
                  <div ref={bar3Ref} className={styles.barfiller}>
                    <span className="fill" data-percentage="75"></span>
                    <div className={styles.tipWrap}>
                      <span className={styles.tip}>75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

