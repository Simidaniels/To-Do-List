import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Rating from './Rating';

 

function App() {
  return (
    <div className='wrap'>
      <div className="nav">
        <Navigation /> 
      </div>
      <div className='main-page'>
          <Home />
      </div>
      <div className='finishing'>
        <Rating />
      </div>
    </div>
  );
}
export default App;


// Not perfectly done...
// Have a description issue on Home.js
// Problem: Each To-Do list description conjoin together instead of separating creating a mess
