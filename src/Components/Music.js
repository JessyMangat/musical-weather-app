import React, { Component } from 'react';
    

export default class Music extends Component {

 
   
   
    render(){
        
        return(

            <div className="playlist">
            <iframe width="1020" height="630" src={`https://www.youtube.com/embed/videoseries?list=${this.props.playlist}`} title="playlist" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        )
    }

}







