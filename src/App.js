import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm /> 
      {/* <FaceRecognition />*/}
    </div>
  );
}

export default App;
