import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import WhatYouGet from './components/WhatYouGet';
import Advantages from './components/Advantages';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ForWhom />
      <WhatYouGet />
      <Advantages />
      <Portfolio />
      <Process />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;