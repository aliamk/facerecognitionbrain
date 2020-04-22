import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 200
      },
    }
  }
}

class App extends Component {
    render() {
      return (
        <div className="App">
          <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm />
          {/* <FaceRecognition />*/}
        </div>
      );
    }
}

export default App;
