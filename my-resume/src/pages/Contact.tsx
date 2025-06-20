import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>お問い合わせ</h2>
      <ul>
        <li><a href="mailto:your-email@example.com">メールで連絡する</a></li>
        <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </section>
  );
};

export default Contact;
