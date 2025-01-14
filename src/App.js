import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/header.css';
import './css/hero.css';
import './css/feedback.css';
import './css/about.css';
import './css/experience.css';
import './css/folder.css';
import './css/menu.css';
import './css/body.css';
import './css/font-awesome.min.css';
import './css/variables.css';
import './css/gallery.css';
import './css/github.css';
import './css/portfolio.css';
import './css/skills.css';
import './css/version.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Feedback from './components/Feedback';
import About from './components/About';
import Experience from './components/Experience';
import Folder from './components/Folder';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/folder" component={Folder} />
          <Route path="/menu" component={Menu} />
        </Switch>
        <Feedback />
      </div>
    </Router>
  );
};

export default App;
