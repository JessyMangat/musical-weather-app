import React, { Component } from 'react';
import './App.css';
import HeroText from './Components/HeroText';
import Geolocation from './Components/Geolocation';



class App extends Component{
    render(){
      return(
      <div className ="App">
      <div className="jumbotron jumbotron-fluid homepage-hero">
      <HeroText />
      <Geolocation />
      </div>
      </div>

      );
    }
}


export default App;

// Dark sky API key: https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/[latitude],[longitude]

