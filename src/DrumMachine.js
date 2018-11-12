import React, { Component } from 'react';
import './DrumMachine.css';
import DrumPad from './DrumPad';
import Display from './Display';

class DrumMachine extends Component{
  constructor(props){
    super(props);
    this.state={
      sound:' '
    }
    this.setDisplay=this.setDisplay.bind(this);
  }

  setDisplay(newDisplay){
    this.setState({
      sound:newDisplay
    });
  }

  componentWillMount(){
    window.addEventListener('keypress',(e)=>{
      switch(e.key){
        case 'q':
          document.getElementById("Q").click();
          break;
        case 'w':
          document.getElementById("W").click();
          break;
        case 'e':
          document.getElementById("E").click();
          break;
        case 'a':
          document.getElementById('A').click();
          break;
        case 's':
          document.getElementById("S").click();
          break;
        case 'd':
          document.getElementById('D').click();
          break;
        case 'z':
          document.getElementById('Z').click();
          break;
        case 'x':
          document.getElementById("X").click();
          break;
        case 'c':
          document.getElementById('C').click();
          break;
        default:
          break;
      }
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
