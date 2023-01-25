import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <Router>
      <div className='app app__background-image'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header>
            <Navigation />
          </Header>
          <BrowserRouter>
            <Switch>
              <Route
                index
                path='/'
                element={
                  <Main />
                }
              />
            </Switch>
          </BrowserRouter>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
