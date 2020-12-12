import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  function tick() {
    const timeCounter = timer - 1;
    setTimer(timeCounter);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      const timeCounter = Math.floor(event.target.value);
      if (typeof timeCounter === "number" && timeCounter > 0) {
        setTimer(timeCounter);
        setStart(true);
      } else {
        setTimer(0);
      }
    }
  }

  useEffect(() => {
    if (timer === 0) {
      setStart(false);
    }
    if (start) {
      const interval = setInterval(tick, 1000);
      return () => clearInterval(interval);
    }
  }, [start, timer]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
