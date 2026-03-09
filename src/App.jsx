import { useState } from "react";
import TrafficLight from "./TrafficLight";

function App() {

  const [light, setLight] = useState("red");

  const nextLight = () => {
    if (light === "red") setLight("amber");
    else if (light === "amber") setLight("green");
    else setLight("red");
  };

  return (
    <>
      <TrafficLight color="red" isOn={light === "red"} />
      <TrafficLight color="orange" isOn={light === "amber"} />
      <TrafficLight color="green" isOn={light === "green"} />

      <button onClick={nextLight}>Next</button>
    </>
  );
}

export default App;