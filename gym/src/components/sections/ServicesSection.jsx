import { Link } from 'react-router-dom';
import styles from '../../styles/ServicesSection.module.css';
import service1 from '../../assets/img/services/services-1.jpg';
import service2 from '../../assets/img/services/services-2.jpg';
import service3 from '../../assets/img/services/services-3.jpg';
import service4 from '../../assets/img/services/services-4.jpg';
// Placeholder images
// const service1 = 'https://via.placeholder.com/400x300/151515/f36100?text=Service+1';
// const service2 = 'https://via.placeholder.com/400x300/151515/f36100?text=Service+2';
// const service3 = 'https://via.placeholder.com/400x300/151515/f36100?text=Service+3';
// const service4 = 'https://via.placeholder.com/400x300/151515/f36100?text=Service+4';

const ServicesSection = () => {
  const services = [
    { id: 1, image: service1, title: 'Personal training', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.', order: 1 },
    { id: 2, image: service2, title: 'Group fitness classes', description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.', order: 2 },
    { id: 3, image: service3, title: 'Strength training', description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.', order: 5 },
    { id: 4, image: service4, title: 'Body building', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.', order: 8 }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionTitle}>
              <span>What we do?</span>
              <h2>PUSH YOUR LIMITS FORWARD</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className={`col-lg-3 order-lg-${service.order} col-md-6 p-0`}>
              {service.order % 2 === 0 ? (
                <div className={styles.ssText}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <Link to="/services">Explore</Link>
                </div>
              ) : (
                <div className={styles.ssPic}>
                  <img src={service.image} alt={service.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

