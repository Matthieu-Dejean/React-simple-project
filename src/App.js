import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Post1 from './pages/Post1'
import Post2 from './pages/Post2'
import Post3 from './pages/Post3'


function App() {
  return (
    <>
      <Router>
          <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/post/3'><Post3 /></Route>
          <Route path='/post/2'><Post2 /></Route>
          <Route path='/post/:id'><Post1 /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
