// import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import ClockControl from "./components/ClockControl";

function App() {
  // const [flag, setFlag] = useState(true);
  const userInfo = {
    firstName: "World",
    lastName: "friends",
  };

  // const toggle = () => {
  //   console.log("Toggle Clicked")ss;
  //   setFlag(!flag);
  // };

  return (
    <>
      <Welcome user={userInfo} />
      <ClockControl />
    </>
  );
}

export default App;
