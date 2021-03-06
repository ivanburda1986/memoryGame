import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increaseTimer } from "../../actions/timer";

import classes from "./Timer.module.css";

export function displayTime(timerTime) {
  let minutes = parseInt(timerTime / 60);
  let minutesPrecedingZero = minutes < 10 ? "0" : "";
  let seconds = timerTime - minutes * 60;
  let secondsPrecedingZero = seconds < 10 ? "0" : "";
  let display = `${minutesPrecedingZero}${minutes}:${secondsPrecedingZero}${seconds}`;
  return display;
}

export default function Timer() {
  const dispatch = useDispatch();

  let timerOn = useSelector((state) => state.timer.timerOn);
  let timerTime = useSelector((state) => state.timer.timerTime);

  if (timerOn) {
    setTimeout(function time() {
      dispatch(increaseTimer((timerTime += 1)));
    }, 1000);
  }

  return (
    <div className={classes.Timer}>
      <p>Timer: </p>
      <p style={{ marginLeft: "0.5em" }}>{displayTime(timerTime)}</p>
    </div>
  );
}
