import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <Header />
      <section className={styles.section404}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.text404}>
                <h1>404</h1>
                <h3>Opps! This page Could Not Be Found!</h3>
                <p>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
                <form action="#" className={styles.search404}>
                  <input type="text" placeholder="Enter your keyword" />
                  <button type="submit"><i className="fa fa-search"></i></button>
                </form>
                <Link to="/">
                  <i className="fa fa-home"></i> Go back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;

