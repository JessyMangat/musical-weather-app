import React, { Component } from 'react';


export default class Form extends Component{
    render(){
        return(

            <div className="container inputField">
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
        )
    }
};

