import React, { Component } from 'react';
import Backbutton from "./Backbutton";
import Temp from "./Temp";
import Condition from "./Condition"




export default class Weather extends Component{

   
    render() {
      return(
        <div className ="jumbotron jumbotron-fluid weather-hero">
        <div className="weather-info container">
        <div className="row">
        <div className="col-4">
      <Backbutton />
      </div>
      <div className="col-4">
      <div className="text-center">
      <Temp />
      </div>
      </div>
      <div className="col-4">
      <div className="text-right">
      <Condition />
      </div>
      </div>
      </div>
      </div>
      </div>
            );
    }


}