import React, { Component } from 'react';
import './App.css';
import Geolocation from './Components/Geolocation';
import Weatherinfo from './Components/Weatherinfo';




class App extends Component{
    constructor(props) {
        super(props);
        this.state = { isShowingWeather: false, weatherCondition: null };
        this.showWeather = this.showWeather.bind(this);
        this.removeWeather = this.removeWeather.bind(this);
        this.findCondition = this.findCondition.bind(this);
    }


    showWeather() {
      this.setState({ weatherCondition: this.findCondition()});
      this.setState({ isShowingWeather: true });
    }

    removeWeather(){
      this.setState({ isShowingWeather: false});
    }

    findCondition(){
      return 'snow';
      //function will be expanded upon once weather is working correctly
    }

    render(){
      return(
      <div className ="App">      
      {this.state.isShowingWeather ? (
        <div className={`jumbotron jumbotron-fluid ${this.state.weatherCondition}`}>
         <Weatherinfo />
        <div className="button container">
        <button onClick={this.removeWeather} type="button" className="btn btn-outline-primary">Try a different location</button>
         </div>
         </div>
           
      ) : (
        <div className ="jumbotron jumbotron-fluid hero">
            <div className="container hero-text">
      <div className="col-12">
    <h1 className="display-4">Musical Weather App</h1>
    <p>The perfect song for the weather outside.</p>
    </div>
  </div> 
      <Geolocation />
      <div className="button container">
      <div className="col-12">
      <button onClick={this.showWeather} type="button" className="btn btn-outline-primary">Get the weather</button>
      </div>
      </div>
      </div>
      )}
      </div>
      );
    }
}


export default App;