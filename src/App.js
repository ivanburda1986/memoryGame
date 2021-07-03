import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { loadCards } from "./actions/cards";
import imgFilenames from "./media/imgFilenames";

import Maingrid from "./contexts/Maingrid/Maingrid";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadCards(imgFilenames(12)));
  }, [dispatch]);

  return (
    <div className="App">
      <Maingrid />
    </div>
  );
}

export default App;
