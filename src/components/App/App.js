import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  return (
    <div className='app app__background-image'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header>
          <Navigation />
        </Header>
        <Main />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
