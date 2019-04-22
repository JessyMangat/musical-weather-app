import React, { Component } from 'react';


export default class Weatherinfo extends Component{

   
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
        <h3>Precipitation: 0%</h3>
        </div>
        </div>
        </div>
            );
    }


}


