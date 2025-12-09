import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/HeroSection.module.css';
import hero1 from '../../assets/img/hero/hero-1.jpg';
import hero2 from '../../assets/img/hero/hero-2.jpg';
// Use placeholder images if actual images don't exist
// const hero1 = 'https://via.placeholder.com/1920x1080/1a1a1a/f36100?text=Hero+Image+1';
// const hero2 = 'https://via.placeholder.com/1920x1080/1a1a1a/f36100?text=Hero+Image+2';

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      span: 'Shape your body',
      title: 'Be strong traning hard',
      link: '#'
    },
    {
      image: hero2,
      span: 'Shape your body',
      title: 'Be strong traning hard',
      link: '#'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.hsSlider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.hsItem} ${index === currentSlide ? styles.active : ''}`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className={styles.hiText}>
                    <span>{slide.span}</span>
                    <h1>
                      {slide.title.split(' ').map((word, i) => 
                        word.toLowerCase() === 'strong' ? (
                          <strong key={i}> {word} </strong>
                        ) : (
                          ` ${word} `
                        )
                      )}
                    </h1>
                    <Link to={slide.link} className={styles.primaryBtn}>Get info</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

