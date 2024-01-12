import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/mini.css/dist/mini-default.min.css';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  return (
    <div className="container">
      <ProjectsPage />
    </div>
  );
}

export default App;
