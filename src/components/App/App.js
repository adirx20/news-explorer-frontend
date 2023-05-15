import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import AccountButton from '../AccountButton/AccountButton';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../FormInput/FormInput';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  function openLoginPopup() {
    closePopups();
    setIsLoginPopupOpen(true);
  }

  function openRegisterPopup() {
    closePopups();
    setIsRegisterPopupOpen(true);
  }

  function closePopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
  };

  function handleLoginSubmit() {
    // >>> functionality here <<<
    setIsLoginPopupOpen(false);
  }

  function handleRegisterSubmit() {
    // >>> functionality <<<
    setIsRegisterPopupOpen(false);
  }

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
                onClick={openLoginPopup}
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
            <Route
              path='/saved-news'
              element={
                <SavedNews />
              }
            />
          </Routes>
          <Popup
            isOpen={isLoginPopupOpen}
            onClose={closePopups}
          />
          <PopupWithForm
            isOpen={isLoginPopupOpen}
            onClose={closePopups}
            onSubmit={handleLoginSubmit}
            handleOrButton={openRegisterPopup}
            orButtonText='Sign up'
            title='Sign in'
            buttonText='Sign up'
          >
            <FormInput
              type='email'
              name='Email'
              placeholder='email'
            />
            <FormInput
              type='password'
              name='Password'
              placeholder='password'
            />
          </PopupWithForm>
          <PopupWithForm
            isOpen={isRegisterPopupOpen}
            onClose={closePopups}
            onSubmit={handleRegisterSubmit}
            handleOrButton={openLoginPopup}
            orButtonText='Sign in'
            title='Sign up'
            buttonText='Sign in'
          >
            <FormInput
              type='email'
              name='Email'
              placeholder='email'
            />
            <FormInput
              type='password'
              name='Password'
              placeholder='password'
            />
          </PopupWithForm>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
