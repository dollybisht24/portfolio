import React from 'react';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
