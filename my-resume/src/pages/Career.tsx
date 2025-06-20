import React from 'react';
import { useEffect, useState } from 'react';
import { fetchMarkdown } from '../utils/fetchMarkdown'; // ユーティリティ関数でMarkdownを取得

const Career: React.FC = () => {
  const [careerContent, setCareerContent] = useState<string>('');

  useEffect(() => {
    fetchMarkdown('career.md').then(content => setCareerContent(content));
  }, []);

  return (
    <section id="career">
      <h2>経歴</h2>
      <div dangerouslySetInnerHTML={{ __html: careerContent }} />
    </section>
  );
};

export default Career;
