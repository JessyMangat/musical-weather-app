import React, { Component } from 'react';
import './App.css';
import HeroText from './Components/HeroText';
import Geolocation from './Components/Geolocation';
import Button from "./Components/Button";
import Weather from "./Components/Weather";



class App extends Component{
    constructor(props) {
        super(props);
        this.state = { isShowingWeather: false };
        this.showWeather = this.showWeather.bind(this);
        this.removeWeather = this.removeWeather.bind(this);
    }

    showWeather() {
      this.setState({ isShowingWeather: true });
    }

    removeWeather(){
      this.setState({ isShowingWeather: false});
    }

    render(){
      return(
      <div className ="App">      
      {this.state.isShowingWeather ? (
         <div onClick={this.removeWeather}>
         <Weather />
         </div>
      ) : (
        <div className ="jumbotron jumbotron-fluid homepage-hero">
        <HeroText />
      <Geolocation />
      <div onClick={this.showWeather}>
      <Button />
      </div>
      </div>
      )}
      </div>
      );
    }
}


export default App;