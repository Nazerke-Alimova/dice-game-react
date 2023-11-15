import React from "react";
import "./GameBox.css";
import Button from "../Button/Button";
import PlayerName from "../PlayerName/PlayerName";
import { useState } from "react";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/bs";

export default function GameBox({ plaer1, plaer2, winner }) {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [currentPointsOne, setCurrentPointsOne] = useState(0);
  const [currentPointsTwo, setCurrentPointsTwo] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [randomDice, setRandomDice] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState(1);
  const diceIcons = [
    <BsFillDice1Fill />,
    <BsFillDice2Fill />,
    <BsFillDice3Fill />,
    <BsFillDice4Fill />,
    <BsFillDice5Fill />,
    <BsFillDice6Fill />,
  ];

  const handleRollDice = () => {
    if (!isGameOver) {
      let random = Math.floor(Math.random() * 6 + 1);
      setRandomDice(random);
      if (random === 1) {
        setCurrentPlayer(!currentPlayer);
        setCurrentPointsOne(0);
        setCurrentPointsTwo(0);
      } else if (currentPlayer) {
        setCurrentPointsOne(currentPointsOne + random);
      } else {
        setCurrentPointsTwo(currentPointsTwo + random);
      }
    }
  };

  const handleLeave = () => {
    if (currentPlayer) {
      setScoreOne(currentPointsOne + scoreOne);
      if (currentPointsOne + scoreOne >= 10) {
        setWinningPlayer(1);
        setIsGameOver(true);
        winner({ win: true, name: plaer1 });
      }
      setCurrentPointsOne(0);
      setCurrentPlayer(false);
    } else {
      setScoreTwo(currentPointsTwo + scoreTwo);
      if (currentPointsTwo + scoreTwo >= 10) {
        setWinningPlayer(2);
        setIsGameOver(true);
        winner({ win: true, name: plaer2 });
      }
      setCurrentPointsTwo(0);
      setCurrentPlayer(true);
    }
  };

  const handleNewGame = () => {
    setScoreOne(0);
    setScoreTwo(0);
    setCurrentPointsOne(0);
    setCurrentPointsTwo(0);
    setCurrentPlayer(true);
    setRandomDice(null);
    setIsGameOver(false);
    setWinningPlayer('');
    winner({ win: false, name: "" });
  };

  return (
    <div className='gameBox'>
      <PlayerName
        name={plaer1}
        isWinner={winningPlayer === 1 && isGameOver}
        score={scoreOne}
        currentpoints={currentPointsOne}
      />
      <div className="btns">
      <Button
          value={"🐷 NEW GAME"}
          onClick={handleNewGame}
        />
        {randomDice && diceIcons[randomDice - 1]}
        <div className="bbtns_d">
        <Button value={"🎲 ROLL THE DICE"} onClick={handleRollDice} />
        <Button value={"👌 LEAVE"} onClick={handleLeave} />
        </div>
      </div>
      <PlayerName
        name={plaer2}
        isWinner={winningPlayer === 2 && isGameOver}
        score={scoreTwo}
        currentpoints={currentPointsTwo}
      />
   </div>
  );
}