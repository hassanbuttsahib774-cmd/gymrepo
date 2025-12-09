import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/TeamSection.module.css';
import team1 from '../../assets/img/team/team-1.jpg';
import team2 from '../../assets/img/team/team-2.jpg';
import team3 from '../../assets/img/team/team-3.jpg';
import team4 from '../../assets/img/team/team-4.jpg';
import team5 from '../../assets/img/team/team-5.jpg';
import team6 from '../../assets/img/team/team-6.jpg';
// Placeholder images
// const team1 = 'https://via.placeholder.com/400x450/151515/f36100?text=Team+1';
// const team2 = 'https://via.placeholder.com/400x450/151515/f36100?text=Team+2';
// const team3 = 'https://via.placeholder.com/400x450/151515/f36100?text=Team+3';
// const team4 = 'https://via.placeholder.com/400x450/151515/f36100?text=Team+4';
// const team5 = 'https://via.placeholder.com/400x450/151515/f36100?text=Team+5';
// const team6 = 'https://via.placeholder.com/400x450/151515/f36100?text=Team+6';

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    { id: 1, image: team1, name: 'Athart Rachel', role: 'Gym Trainer' },
    { id: 2, image: team2, name: 'Athart Rachel', role: 'Gym Trainer' },
    { id: 3, image: team3, name: 'Athart Rachel', role: 'Gym Trainer' },
    { id: 4, image: team4, name: 'Athart Rachel', role: 'Gym Trainer' },
    { id: 5, image: team5, name: 'Athart Rachel', role: 'Gym Trainer' },
    { id: 6, image: team6, name: 'Athart Rachel', role: 'Gym Trainer' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleMembers = () => {
    const start = currentIndex * 3;
    return teamMembers.slice(start, start + 3);
  };

  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.teamTitle}>
              <div className={styles.sectionTitle}>
                <span>Our Team</span>
                <h2>TRAIN WITH EXPERTS</h2>
              </div>
              <Link to="/contact" className={`${styles.primaryBtn} ${styles.btnNormal} ${styles.appoinmentBtn}`}>
                appointment
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styles.tsSlider}>
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-3">
                <div
                  className={styles.tsItem}
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <div className={styles.tsText}>
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

