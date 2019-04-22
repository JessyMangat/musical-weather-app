import React from 'react';
import Weatherinfo from './Weatherinfo'

class Weatherfetch extends React.Component {
    constructor(props) {
        super(props);
        this.weatherStatus = this.weatherStatus.bind(this);
        this.state = {
            temperature: undefined,
            precip: undefined,
            condition: undefined
          };
      }
 
      componentDidMount() {
        let forecast;
        
        if (this.props.geoloc != null){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/${this.props.geoloc}`)
          .then(res => res.json())
          .then(data => forecast = data)
          .then(() => this.setState ({temperature: forecast.currently.temperature}))
          .then(() => this.setState ({condition: forecast.currently.icon}))
          .then(() => this.setState ({ precip: forecast.currently.precipProbability}))
        }
      }
    
      weatherStatus(){
        console.log(this.state.temperature)
        if(this.props.parentState === false){

          return(
            <div className= "container">
            <h2>{this.props.placeName}</h2>
            </div>
            
          )
        }

        else{
          return(
            <Weatherinfo 

            temp={this.state.temperature}
            precip={this.state.precip}
            condition={this.state.condition}
            />
          )
        }

      }

  render() {
   
    return (

           
          this.weatherStatus()
            );
  }
}

export default Weatherfetch;

