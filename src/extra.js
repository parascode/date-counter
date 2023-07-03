// import "./styles.css";
// import { format } from 'date-fns';
// console.log(format(new Date(), 'yyyy/MM/dd kk:mm:ss'))

// {/* <div style={center}>
//         <button
//           onClick={() => {
//             if (step > 1) setStep((s) => s - 1);
//           }}
//         >
//           -
//         </button>
//         <span>Step : {step}</span>
//         <button onClick={() => setStep((s) => s + 1)}>+</button>
//       </div> */}

// export default function App() {
//   return (
//     <div className="App">
//       <Step />
//       {/* <Counter /> */}
//     </div>
//   );
// }

/*
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
*/