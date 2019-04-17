import React, { Component } from 'react';

export default class Button extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert('This button is functional');
        
    }

    render(){
      return(
      <div className ="Button container">
      <div className="col-12">
      <button onClick={this.handleClick} type="button" class="btn btn-outline-primary">Get the Weather</button>
      </div>
      </div>

      );
    }
}


