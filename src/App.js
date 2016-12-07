import React, {Component} from 'react';
import { Router, IndexRoute, Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux';
import CSSModules from 'react-css-modules';

import {grid, navbar} from 'bootstrap-css';
import './App.css';
import routeHistory from './routeHistory';
import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Factions from './pages/Factions';
import Game from './pages/Game';
import MonsterGear from './pages/MonsterGear';
import MonsterChat from './pages/MonsterChat';
import MonsterGallery from './pages/MonsterGallery/MonsterGallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

const history = syncHistoryWithStore(routeHistory, store);
const styles = {...grid, ...navbar};

const MainWrapper = ({children}) => (
  <div className="App flex-container flex-column">
    <Header />
    {children}
    <Footer />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={MainWrapper}>
          <IndexRoute component={Home}/>
          <Route path="/factions/:faction" components={Factions}/>
          <Route path="/game" components={Game}/>
          <Route path="/store" components={MonsterGear}/>
          <Route path="/chat" components={MonsterChat}/>
          <Route path="/gallery" components={MonsterGallery}/>
          <Route path="/contact" components={Contact}/>
          <Route path="/login" components={Login}/>
          <Route path="/register" components={Register}/>
        </Route>
      </Router>
    );
  }
}

export default CSSModules(App, styles);
