import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProjectsPage from './pages/ProjectsPage'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Simple client-side routing without react-router
const pathname = window.location.pathname.replace(/\/+$/, '');

if (pathname === '/projects' || pathname === '/projects.html') {
  root.render(
    <React.StrictMode>
      <ProjectsPage />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
