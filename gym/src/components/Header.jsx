import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';
// import logo from '../assets/logo.png';
// import logo from '../assets/logo.png';
import logo from '../assets/img/logo.png'; // adjust ../ depending on location of Header.jsx
// Use placeholder logo if actual logo doesn't exist
// const logo = 'https://via.placeholder.com/150/ffffff/f36100?text=LOGO';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <>
      <header className={styles.headerSection}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className={styles.logo}>
                <Link to="/">
                  <img src={logo} alt="Gym Logo" />
                  {/* <img src="img/logo.png" alt="Gym Logo" /> */}

                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className={styles.navMenu}>
                <ul>
                  <li className={isActive('/')}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={isActive('/about')}>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className={isActive('/classes') || isActive('/class-timetable')}>
                    <Link to="/classes">Classes</Link>
                  </li>
                  <li className={isActive('/services')}>
                    <Link to="/services">Services</Link>
                  </li>
                  <li className={isActive('/team')}>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li className={`${styles.dropdown} ${isActive('/pages')}`}>
                    <Link to="#">Pages</Link>
                    <ul className={styles.dropdownMenu}>
                      <li><Link to="/about">About us</Link></li>
                      <li><Link to="/class-timetable">Classes timetable</Link></li>
                      <li><Link to="/bmi-calculator">Bmi calculate</Link></li>
                      <li><Link to="/team">Our team</Link></li>
                      <li><Link to="/gallery">Gallery</Link></li>
                      <li><Link to="/blog">Our blog</Link></li>
                      <li><Link to="/404">404</Link></li>
                    </ul>
                  </li>
                  <li className={isActive('/contact')}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className={styles.topOption}>
                <div className={styles.toSearch} onClick={toggleSearch}>
                  <i className="fa fa-search"></i>
                </div>
                <div className={styles.toSocial}>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-youtube-play"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.canvasOpen} onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>

      {/* Offcanvas Menu */}
      <div 
        className={`${styles.offcanvasMenuOverlay} ${isMenuOpen ? styles.active : ''}`}
        onClick={closeMenu}
      ></div>
      <div className={`${styles.offcanvasMenuWrapper} ${isMenuOpen ? styles.show : ''}`}>
        <div className={styles.canvasClose} onClick={closeMenu}>
          <i className="fa fa-close"></i>
        </div>
        <div className={styles.canvasSearch} onClick={toggleSearch}>
          <i className="fa fa-search"></i>
        </div>
        <nav className={styles.canvasMenu}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/classes" onClick={closeMenu}>Classes</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/team" onClick={closeMenu}>Our Team</Link></li>
            <li>
              <Link to="#">Pages</Link>
              <ul className={styles.dropdown}>
                <li><Link to="/about" onClick={closeMenu}>About us</Link></li>
                <li><Link to="/class-timetable" onClick={closeMenu}>Classes timetable</Link></li>
                <li><Link to="/bmi-calculator" onClick={closeMenu}>Bmi calculate</Link></li>
                <li><Link to="/team" onClick={closeMenu}>Our team</Link></li>
                <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                <li><Link to="/blog" onClick={closeMenu}>Our blog</Link></li>
                <li><Link to="/404" onClick={closeMenu}>404</Link></li>
              </ul>
            </li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.canvasSocial}>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-youtube-play"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className={styles.searchModel}>
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className={styles.searchCloseSwitch} onClick={toggleSearch}>+</div>
            <form className={styles.searchModelForm}>
              <input 
                type="text" 
                id="search-input" 
                placeholder="Search here....."
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

