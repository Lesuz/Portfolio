import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutMe from './Views/AboutMe';
import Projects from './Views/Projects';
import Skills from './Views/Skills';
import Mywebsite from './Projects/Mywebsite';
import CoronaInTheWorld from './Projects/CoronaInTheWorld';
import Guestbook from './Projects/Guestbook';

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
        <Route path="/Projects/CoronaInTheWorld" component={CoronaInTheWorld}></Route>
        <Route path="/Projects/Guestbook" component={Guestbook}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
