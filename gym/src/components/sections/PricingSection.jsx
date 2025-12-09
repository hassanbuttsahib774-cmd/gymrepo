import { Link } from 'react-router-dom';
import styles from '../../styles/PricingSection.module.css';

const PricingSection = () => {
  const plans = [
    {
      title: 'Class drop-in',
      price: '$ 39.0',
      period: 'SINGLE CLASS',
      features: [
        'Free riding',
        'Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
        'Month to mouth',
        'No time restriction'
      ]
    },
    {
      title: '12 Month unlimited',
      price: '$ 99.0',
      period: 'SINGLE CLASS',
      features: [
        'Free riding',
        'Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
        'Month to mouth',
        'No time restriction'
      ]
    },
    {
      title: '6 Month unlimited',
      price: '$ 59.0',
      period: 'SINGLE CLASS',
      features: [
        'Free riding',
        'Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
        'Month to mouth',
        'No time restriction'
      ]
    }
  ];

  return (
    <section className={styles.pricingSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionTitle}>
              <span>Our Plan</span>
              <h2>Choose your pricing plan</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-8">
              <div className={styles.psItem}>
                <h3>{plan.title}</h3>
                <div className={styles.piPrice}>
                  <h2>{plan.price}</h2>
                  <span>{plan.period}</span>
                </div>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`${styles.primaryBtn} ${styles.pricingBtn}`}>
                  Enroll now
                </Link>
                <Link to="/gallery" className={styles.thumbIcon}>
                  <i className="fa fa-picture-o"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

