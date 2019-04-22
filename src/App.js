import React, { Component } from 'react';
import './App.css';
import Weatherstatus from './Components/Weatherstatus';

class App extends Component{
  
    render(){
      return(
      <div className ="App">      
      <Weatherstatus />
      </div>
      );
    }
}

export default App;