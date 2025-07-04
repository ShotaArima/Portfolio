import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Career: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/markdowns/career.md`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <section id="career" className="text-left w-full p-4">
      <h1>経歴</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );
};

export default Career;
