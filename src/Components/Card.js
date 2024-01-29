import React from "react";
import behind from "../img_card/behind.png";
import "../css/Card.css";

const styleCard = {
  height: "210px",
  width: "150px",
  padding: "10px 5px",
  display: "block",
  borderRadius: "15px",
  objectFit: "cover",
  // visibility: "visible",
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
          // onCopy="return false"
          className="front"
          style={{ ...styleCard, visibility: card.visibility }}
          src={card.src}
          alt="front cảd"
        />
        <img
          // onCopy="return false"
          className="back"
          style={{ ...styleCard, visibility: card.visibility }}
          onClick={handleClick}
          src={behind}
          alt="back cảd"
        />
      </div>
    </div>
  );
}
