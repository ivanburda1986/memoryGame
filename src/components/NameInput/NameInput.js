import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../actions/game";

import { resetCards } from "../../actions/cards";
import { resetFlipCount } from "../../actions/game";
import { startTimer, pauseTimer } from "../../actions/timer";

import imgFilenames from "../../media/imgFilenames";

import classes from "./NameInput.module.css";

export default function NameInput() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.game.name);
  const pairCount = useSelector((state) => state.game.pairCount);
  const [inputfieldName, setInputfieldName] = React.useState("");

  React.useEffect(() => {
    if (!name) {
      dispatch(pauseTimer());
    }
  }, [name]);

  const restartGame = () => {
    dispatch(resetCards(imgFilenames(pairCount)));
    dispatch(resetFlipCount());
    dispatch(startTimer());
  };

  return (
    <div>
      <input type="text" placeholder="Your name" className={classes.NameInput} onChange={(e) => setInputfieldName(e.target.value)} value={inputfieldName} />
      <button
        type="button"
        className={classes.Button}
        onClick={() => {
          dispatch(setName(inputfieldName));
          restartGame();
        }}
      >
        Start
      </button>
    </div>
  );
}
