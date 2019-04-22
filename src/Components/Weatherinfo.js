import React, { Component } from 'react';


export default class Weatherinfo extends Component{

   
    render() {
      console.log(this.props.temp, this.props.condition, this.props.precip)
      return(
        <div className="container">
        <div className="row">
        <div className="col-4">
        <h3>{this.props.temp}&#8451;</h3>
        </div>
        <div className="col-4">
        <h3>{this.props.condition}</h3>
        </div>
        <div className="col-4">
        <h3>Precipitation: {this.props.precip}%</h3>
        </div>
        </div>
        </div>
            );
    }


}


