import React, { Component } from 'react';
import './DrumMachine.css';
import DrumPad from './DrumPad';
import Display from './Display';

class DrumMachine extends Component{
  constructor(props){
    super(props);
    this.state={
      sound:''
    }
    this.setDisplay=this.setDisplay.bind(this);
  }

  setDisplay(newDisplay){
    this.setState({
      sound:newDisplay
    });
  }

  render(){
    return(
      <div>
        <h1>Drum Machine</h1>
        <div className="drumMachine" id="drum-machine">
          <DrumPad setDisplay={this.setDisplay} />
          <Display sound={this.state.sound} />
        </div>
      </div>
    )
  }
}

export default DrumMachine;
