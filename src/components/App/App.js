import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <Header>
        <Navigation />
      </Header>
      <Main />
    </div>
  );
}

export default App;
