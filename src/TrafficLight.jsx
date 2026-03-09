function TrafficLight({ color, isOn }) {

  const style = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    margin: "10px",
    backgroundColor: isOn ? color : "gray"
  };

  return <div style={style}></div>;
}

export default TrafficLight;