import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Top: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/markdowns/top.md`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <section id="Top" className="text-left w-full p-4">
      <h1>Shota Arima</h1>
      <p>(Handle name: 学生室の住人)</p>
      
      <ReactMarkdown>{markdown}</ReactMarkdown>
      
    </section>
  );
};

export default Top;
