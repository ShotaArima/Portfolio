import React, { useEffect, useState } from 'react';
import styles from './FroSupp.module.css';

const FroSupp: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  
  return (
    <section id="top">
      <div className={`relative min-h-screen flex items-center justify-center text-center overflow-hidden ${styles.heroSection}`}>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/background-image.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={`${styles.content} ${show ? styles.show : ''} `}>
            <h1>私のフロサポ日記</h1>
            {/* <p>数字</p> */}
            <p></p>
          </div>
        </div>
      </div>
      <div className="text-left w-full p-4">
        <h2>いつからファンなのか</h2>
        <p>a</p>
        <p>b</p>
        <h2>どこにいままで遠征したのか</h2>
        <div className="w-full h-[2000px]">
        <iframe
          src={`${process.env.PUBLIC_URL}/map.html`}
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }}
          title="スタジアム地図"
        />
        </div>
      </div>
    </section>
  );
};

export default FroSupp;
