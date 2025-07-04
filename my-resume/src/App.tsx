import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Top from './pages/Top';
import Career from './pages/Career';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FroSupp from './pages/FroSupp';
import NotFound from './pages/NotFound'; // デフォルトエクスポートされたNotFoundをインポート

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Router basename={baseUrl}>
        <header className="w-full fixed top-0 bg-white shadow-md z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              {/* 左側：ナビゲーションバー */}
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  {/* <img 
                    src={`{process.env.PUBLIC_URL}/favicon.jpeg`}
                    width="24"
                    height="24"
                    className="d-inline-block align-text-top"
                  /> */}
                  学生室の住人の部屋
                </Link>
              </div>

              {/* 右側：ナビゲーションバー */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`${baseUrl}career`}>Career</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`${baseUrl}skills`}>Skills</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`${baseUrl}projects`}>Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`${baseUrl}blog`}>Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`${baseUrl}contact`}>Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>

          </div>
        </header>
        <main className="p-6 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/career" element={<Career />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/frosupp" element={<FroSupp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} 学生室の住人(live_in_2107).
        </footer>
      </Router>
    </div>
  );
};

export default App;