import React from "react";
import behind from "../img_card/behind.png";
import "../css/Card.css";

const styleCard = {
  height: "210px",
  width: "150px",
  padding: "10px 10px",
  display: "block",
  borderRadius: "15px",
  objectFit: "cover",
};

export default function Card({ card, handleChoice, flipped, disable }) {
  const handleClick = () => {
    if (!disable) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : " "}>
        <img
          className="front"
          style={styleCard}
          src={card.src}
          alt="front cảd"
        />
        <img
          className="back"
          style={styleCard}
          onClick={handleClick}
          src={behind}
          alt="back cảd"
        />
      </div>
    </div>
  );
}
