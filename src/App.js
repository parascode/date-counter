import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const center2= { display: "grid", justifyContent: "center" };
  const center ={}; // { display: "flex", justifyContent: "center" };

  function handleStepChange(val){
    setStep(val);
  }
  function handleCountChange(cou){
    if(!cou) setCount(0);
    else
    setCount(cou);
  }
  function handleReset(){
    setStep(1);
    setCount(0);
  }
  return (
    <div className = "App">
      <div>
        <input type = "range" min = "1" max = "10" value = {step} onChange = {(e) => handleStepChange(Number(e.target.value))}></input>
        {step}
      </div>
      
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <span>Count : {count}</span> */}
        <input value = {count} onChange = {(e) => handleCountChange(Number(e.target.value))}></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <Tracker count = {count}/>
      {count ? <button style = {center} onClick = {handleReset}>Reset</button> : ""}

    </div>
  );
}


function Tracker({ count, center}) {
  // console.log(count);
  // console.log(center);

  const today = Date.now();
  const display = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric"
  }).format(today);

  const display2 = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric"
  }).format(today + 86400000 * count);

  if (count === 0) 
    return <div >Today is {display}</div>;
  else if (count > 0)
    return (
      <div >
        {count} days from today is {display2}
      </div>
    );
  else
    return (
      <div >
        {count * -1} days ago was {display2}
      </div>
    );
}
