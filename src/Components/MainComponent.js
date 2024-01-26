import { useState, useEffect } from "react";
import Card from "./Card";
import { useRef } from "react";
import "../css/Card.css";

const styleCards = {
  display: "flex",
  flexWrap: "wrap",
};

const cardLOL = [
  {
    src: require(`../img_card/aatrox.jpg`),
    matched: false,
  },
  {
    src: require(`../img_card/irelia.jpg`),
    matched: false,
  },
  {
    src: require(`../img_card/jhin.jpg`),
    matched: false,
  },
  // {
  //   src: require(`../img_card/ksante.jpg`),
  //   matched: false,
  // },
  // {
  //   src: require(`../img_card/lessin.jpg`),
  //   matched: false,
  // },
  // {
  //   src: require(`../img_card/nidalee.jpg`),
  //   matched: false,
  // },
  // {
  //   src: require(`../img_card/yasuo.jpg`),
  //   matched: false,
  // },
  // {
  //   src: require(`../img_card/yone.jpg`),
  //   matched: false,
  // },
  // {
  //   src: require(`../img_card/zed.jpg`),
  //   matched: false,
  // },
];
function MainComponent() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disable, setDisable] = useState(false);

  const shuffleCards = () => {
    const listCards = [...cardLOL, ...cardLOL];
    const shuffledCards = listCards
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurn(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // const checkFlippedCards = () => {
  //   const flippedCards = cards.every((card) => card.matched === true);
  //   if (flippedCards) {
  //     setTimeout(() => {
  //       alert("Chúc mừng! Bạn đã lật hết thẻ!");
  //       shuffleCards();
  //     }, 600);
  //   }
  // };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((preTurn) => preTurn + 1);
    setDisable(false);
    // checkFlippedCards();
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisable(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((preCards) => {
          return preCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <button onClick={shuffleCards}>Play</button>
      <div style={styleCards}>
        {cards.map((card) => (
          <Card
            card={card}
            handleChoice={handleChoice}
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disable={disable}
          />
        ))}
      </div>
      <div>Turns: {turn}</div>
    </>
  );
}
export default MainComponent;
