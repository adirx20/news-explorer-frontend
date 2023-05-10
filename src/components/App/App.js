import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import AccountButton from '../AccountButton/AccountButton';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <BrowserRouter>
      <div className='app app__background-image'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header>
            <Navigation
              loggedIn={loggedIn}
            >
              <AccountButton
                loggedIn={loggedIn}
              />
            </Navigation>
          </Header>
          <Routes>
            <Route
              index
              path='/'
              element={
                <Main />
              }
            />
          </Routes>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
