import React, { useEffect, useState } from 'react';
import styles from './Top.module.css';

const Top: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  
  return (
    <section id="top" className={`relative min-h-screen flex items-center justify-center text-center overflow-hidden ${styles.heroSection}`}>
      
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background-image.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`${styles.content} ${show ? styles.show : ''} `}>
          <h1>Strike while the iron is hot.</h1>
          <p>Welcome! On this page, I introduce my profile and activities. Please take a look around.</p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Top;
