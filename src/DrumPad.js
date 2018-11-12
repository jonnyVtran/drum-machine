import React from 'react';
import Audio from './Audio';

const DrumPad = ({setDisplay}) => {
  const numbers = ['Q','W','E','A','S','D','Z','X','C'];

  const pads = numbers.map((item)=>{
    const itemCopy = {item};
    const newKey = itemCopy.item;

    const playSound = () => {
      switch(newKey){
        case "Q":
          setDisplay("Heater-1");
          break;
        case "W":
          setDisplay('Heater-2');
          break;
        case "E":
          setDisplay("Heater-3");
          break;
        case "A":
          setDisplay("Heater-4");
          break;
        case "S":
          setDisplay("Clap");
          break;
        case "D":
          setDisplay("Open HH")
          break;
        case "Z":
          setDisplay("Kick n' Hat");
          break;
        case "X":
          setDisplay("Kick");
          break;
        case "C":
          setDisplay("closed HH");
          break;
        default:
          setDisplay('error');
          break;
      }
      document.getElementById(newKey+"-sound").play();
    }

    return <button id={item} key={item} onClick={playSound} className={`${item} pad`}>{item}</button>
  });

  return(
    <div className="DrumPad">
      {pads}
      <Audio />
    </div>
  )
}


export default DrumPad;
