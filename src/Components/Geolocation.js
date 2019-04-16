import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
const API_KEY = "AIzaSyBc3yXn2btOPZQ6GjyFbgfW8w9lDCZ1vMg";


class Geolocation extends Component {
    constructor(props) {
      super(props)
      this.state = {
        place: null,
      };
    }
  
    render() {
        console.log("results ", this.state.place)
      return (
        <div className="container">
        <div className="col-12">
           <GoogleComponent
           
            apiKey={API_KEY}
            language={'en'}
            country={'country:ca|country:us'}
            coordinates={true}
            onChange={(e) => { this.setState({ place: e }) }} />
        </div>
        </div>
  
      )
    } 
  }
  
  
  export default Geolocation;