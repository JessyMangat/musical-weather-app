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
        mood : "",
        precip: null};
        this.removeWeather = this.removeWeather.bind(this);
        this.setMood = this.setMood.bind(this);
        this.weatherConvert = this.weatherConvert.bind(this);
        this.convertCondition = this.convertCondition.bind(this);
    }

    weatherFetch = async (geoloc) => {
      
      
      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/${geoloc}`);
      const response = await api_call.json();
      this.weatherConvert(response);
      this.convertCondition(response);
      this.setMood(response);
      alert(this.state.mood)
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
      }

      else if(response.currently.icon === 'clear-night'){
        this.setState({convertedCondtition: 'Clear Night'})
      }
      else if(response.currently.icon === 'cloudy'){
        this.setState({convertedCondtition: 'Cloudy'})
      }
      else if(response.currently.icon === 'fog'){
        this.setState({convertedCondtition: 'Fog'})
      }
      else if(response.currently.icon === 'partly-cloudy-day'){
        this.setState({convertedCondtition: 'Partly Cloudy Day'})
      }
      else if(response.currently.icon === 'partly-cloudy-night'){
        this.setState({convertedCondtition: 'Partly Cloudy Night'})
      }
      else if(response.currently.icon === 'rain'){
        this.setState({convertedCondtition: 'Rain'})
      }
      else if(response.currently.icon === 'snow'){
        this.setState({convertedCondtition: 'Snow'})
      }
      else if(response.currently.icon === 'thunderstorm'){
        this.setState({convertedCondtition: 'Thunderstorm'})
      }
      else if(response.currently.icon === 'tornado'){
        this.setState({convertedCondtition: 'Tornado'})
      }
      else if(response.currently.icon === 'sleet'){
        this.setState({convertedCondtition: 'Sleet'})
      }
      else if(response.currently.icon === 'hail'){
        this.setState({convertedCondtition: 'Hail'})
      }
      else if(response.currently.icon === 'wind'){
        this.setState({convertedCondtition: 'Windy'})
      }
    }

   setMood(response){

    if(response.currently.icon === 'clear-day'){
      this.setState({mood: 'Happy'});
    }

    else if(response.currently.icon === 'clear-night'){
      this.setState({mood: 'Happy'})
    }
    else if(response.currently.icon === 'cloudy'){
      this.setState({mood: 'Mellow'})
    }
    else if(response.currently.icon === 'fog'){
      this.setState({mood: 'Mellow'})
    }
    else if(response.currently.icon === 'partly-cloudy-day'){
      this.setState({mood: 'Happy'})
    }
    else if(response.currently.icon === 'partly-cloudy-night'){
      this.setState({mood: 'Happy'})
    }
    else if(response.currently.icon === 'rain'){
      this.setState({mood: 'Rain'})
    }
    else if(response.currently.icon === 'snow'){
      this.setState({mood: 'Snow'})
    }
    else if(response.currently.icon === 'thunderstorm'){
      this.setState({mood: 'Rain'})
    }
    else if(response.currently.icon === 'tornado'){
      this.setState({mood: 'Rain'})
    }
    else if(response.currently.icon === 'sleet'){
      this.setState({mood: 'Snow'})
    }
    else if(response.currently.icon === 'hail'){
      this.setState({mood: 'Snow'})
    }
    else if(response.currently.icon === 'wind'){
      this.setState({mood: 'Mellow'})
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
        mood = {this.state.mood}
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

/*  if(this.state.temp >= 20 && this.state.convertedCondtition === "Clear Day"){
      this.setState({ mood : 'Summer Day'})
    }
    else if(this.state.temp >= 20 && this.state.convertedCondtition === "Partly Cloudy Day"){
      this.setState({ mood : 'Summer Day'})
    }
    else if (this.state.temp >= 15 && this.state.convertedCondtition === "Clear Night"){
      this.setState({ mood : "Summer Night"})
    }
    else if (this.state.temp >= 15 && this.state.convertedCondtition === "Partly Cloudy Night"){
      this.setState({ mood : "Summer Night"})
    }
    else if (this.state.convertCondition === "Rain"){
      this.setState({ mood : "Rain"})
    }
    else if(this.state.temp <= 0 && this.state.convertedCondtition === "Clear Day"){
      this.setState({ mood : 'Winter Day'})
    }
    else if(this.state.temp <= 0 && this.state.convertedCondtition === "Partly Cloudy Day"){
      this.setState({ mood : 'Winter Day'})
    }
    else if (this.state.temp <= 0 && this.state.convertedCondtition === "Clear Night"){
      this.setState({ mood : "Winter Night"})
    }
    else if (this.state.temp <= 0 && this.state.convertedCondtition === "Partly Cloudy Night"){
      this.setState({ mood : "Winter Night"})
    }
    else if(this.state.convertedCondtition === "Snow"){
      this.setState({ mood : "Snow"})
    }
    else if(this.state.convertedCondtition === "Sleet"){
      this.setState({ mood : "Snow"})
    }
    else if(this.state.convertedCondtition === "Hail"){
      this.setState({ mood : "Snow"})
    }
    else if(this.state.convertedCondtition === "Thunderstorm"){
      this.setState({ mood : "Thunderstorm"})
    }
    else if(this.setState.convertedCondition === "Cloudy"){
      this.setState({ mood : "Cloudy"})
    }
    else if(this.setState.convertedCondition === "Fog"){
      this.setState({ mood : "Fog"})
    }
    else {
      this.setState({ mood : "Other"})
    }

    */