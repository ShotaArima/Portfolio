import React from 'react';
import styles from './Top.module.css';

const Top: React.FC = () => {
  return (
    <section
      id="top"
      className={`relative min-h-screen flex items-center justify-center text-center overflow-hidden ${styles.heroSection}`}
    >

      {/* 内容：前面に出す */}
      <div className="relative z-10 p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">学生室の住人</h1>
        <p className="text-lg">テックカンファレンスに参加したり、スタッフをしたりしています。</p>
      </div>
    </section>
  );
};

export default Top;
