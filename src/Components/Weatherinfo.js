import React, { Component } from 'react';


export default class Weatherinfo extends Component{


   
    render() {
      
      return(
        <div className={`jumbotron jumbotron-fluid ${this.props.condition}`}>
        <div className="container">
        <div className="row">
        <div className="col-4">
        <h2>{this.props.temp}&#8451;</h2>
        </div>
        <div className="col-4 text-center">
        <h2>{this.props.condition}</h2>
        </div>
        <div className="col-4 text-right">
        <h2>Precipitation: {this.props.precip}%</h2>
        </div>
        </div>
        <div className="button">
        <div className="col-12">
        <button onClick={this.props.removeWeather} type="button" className="btn btn-outline-primary">Try Another Location</button>
        </div>
        </div>
        </div>
         </div>
            );
    }


}


