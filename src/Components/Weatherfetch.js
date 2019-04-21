import React from 'react';

class Weatherfetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          weather: [],
        };
      }
 
      componentDidMount() {
        fetch(
            `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/${this.props.geoloc}`,
        )
          .then(response => {
            return response.json();
          })
          .then(weather => {
            this.setState({
              weather: weather.results,
            });
          });
      }


  render() {
   console.log(`https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/${this.props.geoloc}`)
    return (
            <div className = "container">
            <h2>{this.props.placeName}</h2>
            </div>
    );
  }
}

export default Weatherfetch;

//`https://api.darksky.net/forecast/ce78886966dcf6660a6c4074d0de2700/${this.props.geoloc}`