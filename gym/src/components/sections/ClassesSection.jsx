import { Link } from 'react-router-dom';
import styles from '../../styles/ClassesSection.module.css';
import class1 from '../../assets/img/classes/class-1.jpg';
import class2 from '../../assets/img/classes/class-2.jpg';
import class3 from '../../assets/img/classes/class-3.jpg';
import class4 from '../../assets/img/classes/class-4.jpg';
import class5 from '../../assets/img/classes/class-5.jpg';


// Placeholder images
// const class1 = 'https://via.placeholder.com/400x300/151515/f36100?text=Class+1';
// const class2 = 'https://via.placeholder.com/400x300/151515/f36100?text=Class+2';
// const class3 = 'https://via.placeholder.com/400x300/151515/f36100?text=Class+3';
// const class4 = 'https://via.placeholder.com/400x300/151515/f36100?text=Class+4';
// const class5 = 'https://via.placeholder.com/400x300/151515/f36100?text=Class+5';

const ClassesSection = () => {
  const classes = [
    { id: 1, image: class1, category: 'STRENGTH', title: 'Weightlifting', link: '/classes' },
    { id: 2, image: class2, category: 'Cardio', title: 'Indoor cycling', link: '/classes' },
    { id: 3, image: class3, category: 'STRENGTH', title: 'Kettlebell power', link: '/classes' },
    { id: 4, image: class4, category: 'Cardio', title: 'Indoor cycling', link: '/classes', large: true },
    { id: 5, image: class5, category: 'Training', title: 'Boxing', link: '/classes', large: true }
  ];

  return (
    <section className={styles.classesSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionTitle}>
              <span>Our Classes</span>
              <h2>WHAT WE CAN OFFER</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {classes.map((classItem) => (
            <div 
              key={classItem.id} 
              className={classItem.large ? 'col-lg-6' : 'col-lg-4 col-md-6'}
            >
              <div className={styles.classItem}>
                <div className={styles.ciPic}>
                  <img src={classItem.image} alt={classItem.title} />
                </div>
                <div className={styles.ciText}>
                  <span>{classItem.category}</span>
                  {classItem.large ? (
                    <h4>{classItem.title}</h4>
                  ) : (
                    <h5>{classItem.title}</h5>
                  )}
                  <Link to={classItem.link}>
                    <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;

