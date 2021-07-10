import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Timer from "../Timer/Timer";
import classes from "./Dashboard.module.css";
import StartRestart from "../StartRestart/StartRestart";

export default function Dashboard() {
  const flipCount = useSelector((state) => state.game.flipCount);
  const name = useSelector((state) => state.game.name);

  return (
    <div className={classes.Dashboard}>
      <div className={classes.DashboardWrapper}>
        <p>Total flips: {flipCount}</p>
        <Timer />
        <p>{name}</p>
        <StartRestart />
      </div>
    </div>
  );
}
