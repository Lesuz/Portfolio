import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutMe from './Views/AboutMe';
import Projects from './Views/Projects';
import Skills from './Views/Skills';
import Coronaintheworld from './Projects/Coronaintheworld';
import Mywebsite from './Projects/Mywebsite';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
          <Skills />
          <Projects />
        </Route>
        <Route path="/Projects/Mywebsite" component={Mywebsite}></Route>
        <Route path="/Projects/Coronaintheworld" component={Coronaintheworld}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
