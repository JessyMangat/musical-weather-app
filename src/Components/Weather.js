import React, { Component } from 'react';


export default class Weather extends Component{

   
    render() {
      return(
        <div className="container">
        <div className="row">
        <div className="col-4">
        <h3>18&#8451;</h3>
        </div>
        <div className="col-4">
        <h3>It's Sunny Outside</h3>
        </div>
        <div className="col-4">
        <h3>10% Chance of Precip</h3>
        </div>
        </div>
        </div>
            );
    }


}