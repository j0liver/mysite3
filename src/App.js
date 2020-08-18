import React from 'react';
import './App.css';

import { Route } from "react-router-dom";

//components
import SideNav from './components/SideNav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Route exact path='/' component={Home} />
      <Route path='projects' component={} />
    </div>
  );
}

export default App;
