import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutMe from './Views/AboutMe';
import Landingpage from './Views/Landingpage';
import Projects from './Views/Projects';

function App() {
  return (
    <div>
      <Header />
      <Landingpage />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
