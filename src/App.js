// import "./styles.css";
// import { format } from 'date-fns';
// console.log(format(new Date(), 'yyyy/MM/dd kk:mm:ss'))
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const center = { display: "flex", justifyContent: "center" };
  return (
    <div>
      <div style={center}>
        <button
          onClick={() => {
            if (step > 1) setStep((s) => s - 1);
          }}
        >
          -
        </button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div style={center}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
    </div>
  );
}
// export default function App() {
//   return (
//     <div className="App">
//       <Step />
//       {/* <Counter /> */}
//     </div>
//   );
// }
function Step() {
  const [step, setStep] = useState(1);
  function stepUp() {
    setStep((s) => s + 1);
  }
  function stepDown() {
    if (step > 1) setStep((s) => s - 1);
  }
  // style = {{display : "flex", justifyContent : "center"}}
  return (
    <div tyle={{ display: "flex", justifyContent: "center" }}>
      <button onClick={stepDown}>-</button>
      Step : {step}
      <button onClick={stepUp}>+</button>
      <Counter step={step} />
    </div>
  );
}
function Counter({ step }) {
  const [count, setCount] = useState(0);
  function countUp() {
    setCount((c) => c + step);
  }
  function countDown() {
    setCount((c) => c - step);
  }
  return (
    <div>
      <button onClick={countDown}>-</button>
      Count : {count}
      <button onClick={countUp}>+</button>
      <Tracker count={count} />
    </div>
  );
}
function Tracker({ count }) {
  // const day = new Date().toUTCString();
  // const other = moment(day).format("YYYY/MM/DD kk:mm:ss");
  // console.log(day);
  const today = Date.now();
  // console.log(today);
  // console.log(today + (86400000 * count));
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
  if (count === 0) return <div>Today is {display}</div>;
  else if (count > 0)
    return (
      <div>
        {count} days from today is {display2}
      </div>
    );
  else
    return (
      <div>
        {count * -1} days ago was {display2}
      </div>
    );
}
