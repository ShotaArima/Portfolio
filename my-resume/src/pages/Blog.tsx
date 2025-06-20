import React from 'react';

const Blog: React.FC = () => {
  return (
    <section id="blog">
      <h2>ブログ・記事</h2>
      <ul>
        <li><a href="https://yourblog.com/technical-article" target="_blank" rel="noopener noreferrer">技術記事1</a></li>
        <li><a href="https://yourblog.com/slides" target="_blank" rel="noopener noreferrer">登壇スライド</a></li>
      </ul>
    </section>
  );
};

export default Blog;
