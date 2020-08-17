import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import SideNav from './components/SideNav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Home />
    </div>
  );
}

export default App;
