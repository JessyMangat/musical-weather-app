import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="jumbotron jumbotron-fluid">
  <div className="container hero-text">
      <div className="col-12">
    <h1 className="display-4">Musical Weather App</h1>
    <p>The perfect song for the weather outside.</p>
    </div>
  </div>
  <div className="container">
  <div className="form-group col-12">
    <input type="city" className="form-control" id="cityInput" aria-describedby="cityHelp" placeholder="City"/>
  </div>
  <div className="form-group col-12">
    <input type="text" className="form-control" id="provinceInput" aria-describedby="provinceHelp" placeholder="Province / State"/>
  </div>
  <div className="form-group col-12">
    <input type="text" className="form-control" id="countryInput" aria-describedby="countryHelp" placeholder="Country"/>
  </div>
  <div className="col-12">
  <button type="submit" className="btn btn-primary location-button">Get My Weather</button>
  </div>
  </div>
</div>
</div>
         
    );
  }
} 



export default App;

// Dark sky API key: https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/[latitude],[longitude]
// Google geolocation API : https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBc3yXn2btOPZQ6GjyFbgfW8w9lDCZ1vMg
