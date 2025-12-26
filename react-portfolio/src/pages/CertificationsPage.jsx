import React from 'react';
import Navigation from '../components/Navigation';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';

const CertificationsPage = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default CertificationsPage;
