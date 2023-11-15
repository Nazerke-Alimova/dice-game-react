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
  const diceIcons = [
    <BsFillDice1Fill />,
    <BsFillDice2Fill />,
    <BsFillDice3Fill />,
    <BsFillDice4Fill />,
    <BsFillDice5Fill />,
    <BsFillDice6Fill />,
  ];

  return (
   <div className="game_box">
      <PlayerName
        name={plaer2}
        isWinner={currentPlayer}
        score={scoreOne}
        currentpoints={currentPointsOne}
      />
      <div className="buttons-div">
        <Button
          value={"🐷 NEW GAME"}
          onClick={() => {
            setScoreOne(0);
            setScoreTwo(0);
            setCurrentPointsOne(0);
            setCurrentPointsTwo(0);
            setCurrentPlayer(true);
            setRandomDice(null);
            winner({ win: false, name: "" });
          }}
        />
        {randomDice && diceIcons[randomDice - 1]}
        <div className="buttons_down">
          <Button
            value={"🎲 ROLL THE DICE"}
            onClick={() => {
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
            }}
          />
          <Button
            value={"👌 LEAVE"}
            onClick={() => {
              if (currentPlayer) {
                setScoreOne(currentPointsOne + scoreOne);
                if (currentPointsOne + scoreOne >= 100) {
                  winner({ win: true, name: plaer1 });
                }
                setCurrentPointsOne(0);
                setCurrentPlayer(false);
              } else {
                setScoreTwo(currentPointsTwo + scoreTwo);
                if (currentPointsTwo + scoreTwo >= 100) {
                  winner({ win: true, name: plaer2 });
                }
                setCurrentPointsTwo(0);
                setCurrentPlayer(true);
              }
            }}
          />
        </div>
      </div>
      <PlayerName
        name={plaer2}
        isWinner={!currentPlayer}
        score={scoreTwo}
        currentpoints={currentPointsTwo}
      />
   </div>
  );
}