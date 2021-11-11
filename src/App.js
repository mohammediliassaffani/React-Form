import React from 'react';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import LoginForm from './Components/LoginForm/LoginForm';
import Header from './Components/Header/Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationForm/>
      <LoginForm/>
    </div>
  )
}

export default App;
