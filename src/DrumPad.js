import React from 'react';
import Audio from './Audio';

//PROBLEMMM EVERY TIME PLAYSOUND FUNCTION RUNS, NEW EVENT LISTENERS GET ADDED.

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
      console.log('sound played')
      document.getElementById(newKey+"-sound").play();
    }

    //MOVED OUT SO EVENT LISTENER WONT BE ADDED 9 TIMES

    // window.addEventListener('keypress',(e)=>{
    //   console.log('event listener ran')
    //   if(e.key===newKey.toLowerCase()){
    //     document.getElementById(newKey+"-sound").play();
    //   }
    // });

    return <button id={item} key={item} onClick={playSound} className={`${item} pad`}>{item}</button>
  });

  //EVENT LISTENER doubles EVERYTIME PLAYSOUND RUNS. happens in AND outside of map function above

  window.addEventListener('keypress',(e)=>{
    console.log('event listener ran')
    if(e.key==='q'){
      document.getElementById("Q-sound").play();
    }
  });

  return(
    <div className="DrumPad">
      {pads}
      <Audio />
    </div>
  )
}


export default DrumPad;
