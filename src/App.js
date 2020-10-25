import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/NavBar'
import Home from './components/pages/Home'
import FormBuilderOne from './components/pages/FormBuilderOne'
import FormEmbeddedOne from './components/pages/FormEmbeddedOne'
import FormPlaylist from './components/pages/FormPlaylist'
import ResourceSong from './components/pages/ResourceSong'
import FormPDF from './components/pages/FormPDF'

import './styles.css';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/formbuilderone' exact component={FormBuilderOne} />
          <Route path='/formembeddedone' exact component={FormEmbeddedOne} />
          <Route path='/formplaylist' exact component={FormPlaylist} />
          <Route path='/resourcesong' exact component={ResourceSong} />
          <Route path='/formpdf' exact component={FormPDF} />
        </Switch>
    </Router>
  );
}

export default App;
