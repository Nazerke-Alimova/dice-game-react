import logo from './logo.svg';
import './App.css';
import GameBox from './components/GameBox/GameBox';
import { useState } from 'react';

function App() {
  const [winner, setWinner] = useState({ win: false, name: "" });
  return (
     <GameBox        
        plaer1={"PLAYER 1"}
        plaer2={"PLAYER 2"}
        winner={setWinner}/>
  );
}

export default App;
