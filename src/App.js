import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import HeroText from './Components/HeroText';

class App extends Component{
    render(){
      return(
      <div className ="App">
      <div className="jumbotron jumbotron-fluid homepage-hero">
      <HeroText />
      <Form />
      </div>
      </div>

      );
    }
}


export default App;

// Dark sky API key: https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/[latitude],[longitude]

