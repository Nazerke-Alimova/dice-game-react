import React from "react";
import PlayerPoint from "../PlayerPoint/PlayerPoint";
import './PlayerName.css'

export default function PlayerName({
  isWinner,
  name,
  score,
  currentpoints
}){
    return(
      <div className={`player ${isWinner ? 'winner-player' : ''}`}>
         <div className='player_name'>     
        <h2 className={isWinner ? 'winner-name' : ''}>{name}</h2>
        <span>{score}</span>
        </div>
        <PlayerPoint currentpoints={currentpoints} />
      </div>
    )
}
