import { useState } from "react";
import Clock from "./Clock";

function ClockControl() {
  const [isClicked, setIsClicked] = useState(true);

  const handleClickON = () => {
    setIsClicked(true);
  };

  const handleClickOFF = () => {
    setIsClicked(false);
  };

  let button;
  if (isClicked) {
    button = <OffButton className="button-time" onClick={handleClickOFF} />;
    console.log("isCLicked is true, call OFFbutton");
  } else {
    button = <OnButton className="button-time" onClick={handleClickON} />;
    console.log("isCLicked is false, call ONbutton");
  }

  return (
    <div>
      {button}
      {isClicked ? (
        <Clock />
      ) : (
        <div>
          <p>Clock OFF</p>
        </div>
      )}
    </div>
  );
}

function OnButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      Turn ON Clock
    </button>
  );
}

function OffButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      Turn OFF Clock
    </button>
  );
}

export default ClockControl;
