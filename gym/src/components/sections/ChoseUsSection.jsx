import styles from '../../styles/ChoseUsSection.module.css';

const ChoseUsSection = () => {
  const items = [
    {
      icon: 'flaticon-034-stationary-bike',
      title: 'Modern equipment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
    },
    {
      icon: 'flaticon-033-juice',
      title: 'Healthy nutrition plan',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    {
      icon: 'flaticon-002-dumbell',
      title: 'Proffesponal training plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
    },
    {
      icon: 'flaticon-014-heart-beat',
      title: 'Unique to your needs',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    }
  ];

  return (
    <section className={styles.choseusSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionTitle}>
              <span>Why chose us?</span>
              <h2>PUSH YOUR LIMITS FORWARD</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className={styles.csItem}>
                <span className={item.icon}></span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoseUsSection;

