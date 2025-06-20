import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>プロジェクト</h2>
      <ul>
        <li>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
            プロジェクト1
          </a>
          <p>GitHubリポジトリへのリンク</p>
        </li>
        <li>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
            プロジェクト2
          </a>
          <p>GitHubリポジトリへのリンク</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
