import React from "react";
import './PlayerPoint.css'
export default function PlayerPoint({ currentpoints }) {
  return (
    <div className="player_point">
      <p className="point_title">current points</p>
      <span className="cpoint_count">{currentpoints}</span>
    </div>
  );
}
