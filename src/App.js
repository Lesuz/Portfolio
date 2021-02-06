import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutMe from './Views/AboutMe';
import Projects from './Views/Projects';
import Skills from './Views/Skills'

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
