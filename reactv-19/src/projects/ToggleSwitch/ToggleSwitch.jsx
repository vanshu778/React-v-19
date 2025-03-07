import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";


export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };
  
  return (
    <>
    <h1 style = {{color:"#000", TextAlign:"center"}}>
      ToggleSwitch <IoIosSwitch style = {{color:"red", TextAlign:"center"}}/>
    </h1>
    <div
      className="toggle-switch"
      style={toggleBGColor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
</>
  );
};
