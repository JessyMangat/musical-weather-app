import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
import Weatherfetch from './Weatherfetch';

const API_KEY = "AIzaSyBc3yXn2btOPZQ6GjyFbgfW8w9lDCZ1vMg";




class Geolocation extends Component {
    constructor(props) {
      super(props)
      this.state = {
        place: null,
      };
    }
    
  
    render() {
      if (this.state.place != null){
      let geoloc = this.state.place.coordinates.lat + ',' + this.state.place.coordinates.lng;

      if (geoloc !== 'undefined,undefined'){
        return(
          <div className="container">
          <Weatherfetch 
          geoloc={this.state.place.coordinates.lat + ',' + this.state.place.coordinates.lng} 
          placeName={this.state.place.place}
          parentState={this.props.parentState}/>
          
          </div>
        )
      }
     
        
      }
      
      
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
        
  
      )}
    } 
  
  
  
  export default Geolocation;