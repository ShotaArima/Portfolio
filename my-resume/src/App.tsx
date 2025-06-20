import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Top from './pages/Top';
import Career from './pages/Career';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; // デフォルトエクスポートされたNotFoundをインポート




const App: React.FC = () => {
  return (
    <Router>
        {/* ナビゲーションバーの作成 */}
      <nav>
        <ul>
          <li><Link to="/">トップページ</Link></li>
          <li><Link to="/career">経歴</Link></li>
          <li><Link to="/skills">スキル</Link></li>
          <li><Link to="/projects">プロジェクト紹介</Link></li>
          <li><Link to="/blog">ブログ・記事</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/career" element={<Career />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />  {/* 404ページ */}
      </Routes>
    </Router>
  );
};

export default App;