import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import AddArticlePage from "./pages/AddArticlePage";
import "./App.css";
import Button from "../../../../react-state-1/ex-003/src/components/Button";

function App() {
  return (
    <Router>
      <div className="Layout">
        <nav className="Navigation">
          <ul>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/add-article">Add Article</Link>
            </li>
          </ul>
        </nav>
        <div className="Content">
          <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/add-article" element={<AddArticlePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
