import { Link } from 'react-router-dom';
import styles from '../styles/Breadcrumb.module.css';
import breadcrumbBg from '../assets/img/breadcrumb-bg.jpg';
// Use placeholder background if actual image doesn't exist
// const breadcrumbBg = 'https://via.placeholder.com/1920x500/0a0a0a/f36100?text=Breadcrumb';

const Breadcrumb = ({ title, paths = [] }) => {
  return (
    <section 
      className={styles.breadcrumbSection}
      style={{ backgroundImage: `url(${breadcrumbBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className={styles.breadcrumbText}>
              <h2>{title}</h2>
              <div className={styles.btOption}>
                {paths.map((path, index) => (
                  <span key={index}>
                    {path.link ? (
                      <Link to={path.link}>{path.label}</Link>
                    ) : (
                      <span>{path.label}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;

