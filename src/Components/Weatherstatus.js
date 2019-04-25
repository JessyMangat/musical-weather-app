import React, { Component } from 'react';
import Weatherform from './Weatherform';
import Weatherinfo from './Weatherinfo';




class Weatherstatus extends Component{
    constructor(props) {
        super(props);
        this.state = { 
        isShowingWeather: false,
        temp: null,
        condition: null,
        convertedCondtition: null,
        precip: null,
        playlist : null};
        this.removeWeather = this.removeWeather.bind(this);
        this.weatherConvert = this.weatherConvert.bind(this);
        this.convertCondition = this.convertCondition.bind(this);
    }

    weatherFetch = async (geoloc) => {
      
      
      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/${geoloc}`);
      const response = await api_call.json();
      this.weatherConvert(response);
      this.convertCondition(response);
      this.setState({isShowingWeather : true})
    
    }

    weatherConvert(response){

      let tempC = response.currently.temperature;
      tempC = tempC -  32;
      tempC = tempC * 0.55555555555;
      tempC = Math.round(tempC);
      this.setState({temp: tempC});

      let precipPercent = response.currently.precipProbability;
      precipPercent = precipPercent * 100;
      this.setState ({precip: precipPercent});

      this.setState({condition: response.currently.icon})
    }

    convertCondition(response){

      if(response.currently.icon === 'clear-day'){
        this.setState({convertedCondtition: 'Clear Day'});
        this.setState({playlist : 'PLWjb-Xtc3i8sqIKXxc2jR3a7Ilbh0HEbV'});
      }

      else if(response.currently.icon === 'clear-night'){
        this.setState({convertedCondtition: 'Clear Night'})
        this.setState({playlist : 'PLWjb-Xtc3i8sebhXhZJroFWL7pZXqPZeh'});
      }
      else if(response.currently.icon === 'cloudy'){
        this.setState({convertedCondtition: 'Cloudy'})
        this.setState({playlist : ''});
      }
      else if(response.currently.icon === 'fog'){
        this.setState({convertedCondtition: 'Fog'})
        this.setState({playlist : ''});
      }
      else if(response.currently.icon === 'partly-cloudy-day'){
        this.setState({convertedCondtition: 'Partly Cloudy Day'})
        this.setState({playlist : ''});
      }
      else if(response.currently.icon === 'partly-cloudy-night'){
        this.setState({convertedCondtition: 'Partly Cloudy Night'})
        this.setState({playlist : 'PLWjb-Xtc3i8ulVbQ4A4492bY5d-veP8l3'});
      }
      else if(response.currently.icon === 'rain'){
        this.setState({convertedCondtition: 'Rain'})
        this.setState({playlist : 'PLWjb-Xtc3i8ueUM-5eM5ySiF_pNt4jbwN'});
      }
      else if(response.currently.icon === 'snow'){
        this.setState({convertedCondtition: 'Snow'})
        this.setState({playlist : 'PLWjb-Xtc3i8t0h3r0kB6LsJ3u8M76A2vy'});
      }
      else if(response.currently.icon === 'thunderstorm'){
        this.setState({convertedCondtition: 'Thunderstorm'})
        this.setState({playlist : 'PLWjb-Xtc3i8vv8YHpnuVO-HcX4p7Tor-4'});
      }
      else if(response.currently.icon === 'tornado'){
        this.setState({convertedCondtition: 'Tornado'})
        this.setState({playlist : 'PLWjb-Xtc3i8v97RoyjNV1UKfeL4FbGqWw'});
      }
      else if(response.currently.icon === 'sleet'){
        this.setState({convertedCondtition: 'Sleet'})
        this.setState({playlist : 'PLWjb-Xtc3i8t0h3r0kB6LsJ3u8M76A2vy'});
      }
      else if(response.currently.icon === 'hail'){
        this.setState({convertedCondtition: 'Hail'})
        this.setState({playlist : 'PLWjb-Xtc3i8t0h3r0kB6LsJ3u8M76A2vy'});
      }
      else if(response.currently.icon === 'wind'){
        this.setState({convertedCondtition: 'Windy'})
        this.setState({playlist : 'PLWjb-Xtc3i8v97RoyjNV1UKfeL4FbGqWw'});
      }
    }

   

    removeWeather(){
      this.setState({temp: null})
      this.setState({condition : null})
      this.setState({precip : null})
      this.setState({ isShowingWeather: false});
    }

    render(){
      return(
      <div className ="App">      
      {this.state.isShowingWeather ? (
        <Weatherinfo 
        playlist = {this.state.playlist}
        temp = {this.state.temp}
        condition = {this.state.condition}
        convertedCondition = {this.state.convertedCondtition}
        precip = {this.state.precip}
        removeWeather ={this.removeWeather}/>
           
      ) : (
       <Weatherform 
       weatherFetch = {this.weatherFetch}/>
      )}
      </div>
      );
    }
}


export default Weatherstatus;