import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './top.module.css';

const Top: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/markdowns/top.md`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <section id="Top" className="text-left w-full p-4">
      <div className={styles.profileContainer}>
        <img  src={`${process.env.PUBLIC_URL}/favicon.jpeg`} 
              alt="Profile"
              className={styles.profileImage}
        />
      
        <div className={styles.profileText}>
          <h1>Shota Arima</h1>
          <p>(Handle name: 学生室の住人)</p>
          <p>学士:情報学</p>
        </div>
      </div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      
    </section>
  );
};

export default Top;
