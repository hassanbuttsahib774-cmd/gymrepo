import { useEffect, useState } from 'react';
import styles from '../styles/Preloader.module.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloder" className={styles.preloder}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Preloader;

