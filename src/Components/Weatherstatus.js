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
        precip: null};
        this.removeWeather = this.removeWeather.bind(this);
        this.weatherConvert = this.weatherConvert.bind(this);
    }

    weatherFetch = async (geoloc) => {
      
      
      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/${geoloc}`);
      const response = await api_call.json();
      this.weatherConvert(response)
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
        temp = {this.state.temp}
        condition = {this.state.condition}
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