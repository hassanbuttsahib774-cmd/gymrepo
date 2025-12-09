import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';
import logo from '../assets/img/logo.png';
// Use placeholder logo if actual logo doesn't exist
// const logo = 'https://via.placeholder.com/150/ffffff/f36100?text=LOGO';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.gettouchSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={styles.gtText}>
                <i className="fa fa-map-marker"></i>
                <p>333 Middle Winchendon Rd, Rindge,<br/> NH 03461</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.gtText}>
                <i className="fa fa-mobile"></i>
                <ul>
                  <li>125-711-811</li>
                  <li>125-668-886</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.gtText} ${styles.email}`}>
                <i className="fa fa-envelope"></i>
                <p>Support.gymcenter@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.footerSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.fsAbout}>
                <div className={styles.faLogo}>
                  <Link to="/"><img src={logo} alt="Gym Logo" /></Link>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                <div className={styles.faSocial}>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-youtube-play"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
                  <a href="#"><i className="fa fa-envelope-o"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className={styles.fsWidget}>
                <h4>Useful links</h4>
                <ul>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/classes">Classes</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className={styles.fsWidget}>
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">My account</a></li>
                  <li><a href="#">Subscribe</a></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.fsWidget}>
                <h4>Tips & Guides</h4>
                <div className={styles.fwRecent}>
                  <h6><Link to="/blog">Physical fitness may help prevent depression, anxiety</Link></h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
                <div className={styles.fwRecent}>
                  <h6><Link to="/blog">Fitness: The best exercise to lose belly fat and tone up...</Link></h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className={styles.copyrightText}>
                <p>
                  Copyright &copy; {currentYear} All rights reserved | This template is made with{' '}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
                  <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

