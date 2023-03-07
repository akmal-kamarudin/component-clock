import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("component mounted or updated");
    const interval = setInterval(showDate, 1000);

    return () => {
      console.log("cleanup Interval");
      clearInterval(interval);
    };
  }, [time]);

  function showDate() {
    // console.log(new Date().toString());
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div>
      <p>The time now is {time}</p>
    </div>
  );
}

export default Clock;
