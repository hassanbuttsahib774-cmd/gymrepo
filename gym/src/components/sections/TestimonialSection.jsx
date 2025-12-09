import { useState, useEffect } from 'react';
import styles from '../../styles/TestimonialSection.module.css';
import testimonial1 from '../../assets/img/testimonial/testimonial-1.jpg';
import testimonial2 from '../../assets/img/testimonial/testimonial-2.jpg';

// Placeholder images
// const testimonial1 = 'https://via.placeholder.com/200x200/151515/f36100?text=Testimonial+1';
// const testimonial2 = 'https://via.placeholder.com/200x200/151515/f36100?text=Testimonial+2';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      name: 'Marshmello Gomez',
      rating: 5
    },
    {
      id: 2,
      image: testimonial2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      name: 'Marshmello Gomez',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentTestimonial];

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionTitle}>
              <span>Testimonial</span>
              <h2>Our cilent say</h2>
            </div>
          </div>
        </div>
        <div className={styles.tsSlider}>
          <div className={styles.tsItem}>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className={styles.tiPic}>
                  <img src={current.image} alt={current.name} />
                </div>
                <div className={styles.tiText}>
                  <p>{current.text}</p>
                  <h5>{current.name}</h5>
                  <div className={styles.ttRating}>
                    {[...Array(current.rating)].map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sliderDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={index === currentTestimonial ? styles.active : ''}
              onClick={() => setCurrentTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

