import React, { Component } from 'react';
import Backbutton from './Backbutton.js';


export default class Weather extends Component{

   
    render() {
      return(
      <div className="jumbotron jumbotron-fluid weather-hero">
        <Backbutton />
      </div>
            );
    }


}