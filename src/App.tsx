import { useEffect, useState } from "react";
import "./App.css";
import StandardCard, { StandardCardSuitType } from "./types/StandardCard";
import { Deck } from "./pages/Deck";
import Uno, { UnoCategoryType } from "./types/Uno";

const allStandardCards = [
  { id: "hearts-ace", suit: "hearts", cardNum: "ace" },
  { id: "spades-five", suit: "spades", cardNum: "five" },
  { id: "diamonds-ace", suit: "diamonds", cardNum: "ace" },
  { id: "diamonds-queen", suit: "diamonds", cardNum: "queen" },
  { id: "spades-ace", suit: "spades", cardNum: "ace" },
  { id: "spades-king", suit: "spades", cardNum: "king" },
  { id: "spades-queen", suit: "spades", cardNum: "queen" },
  { id: "clubs-queen", suit: "clubs", cardNum: "ace" },
  { id: "hearts-king", suit: "hearts", cardNum: "king" },
  { id: "hearts-queen", suit: "hearts", cardNum: "queen" },
];

const allUnoCards = [
  { id: "red-zero", type: "red", num: "6" },
  { id: "orange-zero", type: "orange", num: "0" },
  { id: "orange-one", type: "orange", num: "1" },
  { id: "blue-five", type: "blue", num: "5" },
  { id: "green-zero", type: "green", num: "0" },
  { id: "green-one", type: "green", num: "1" },
  { id: "orange-zero", type: "green", num: "5" },
];

function App() {
  const [standardCards, setStandardCards] = useState<StandardCard[]>([]);

  const [unoCards, setUnoCards] = useState<Uno[]>([]);

  useEffect(() => {
    const standardCardsClasses: StandardCard[] = allStandardCards.map(
      (card) => {
        const cardInstance = new StandardCard(
          card.suit as StandardCardSuitType,
          card.cardNum,
          card.id
        );
        return cardInstance;
      }
    );
    setStandardCards(standardCardsClasses);

    const unoCards = allUnoCards.map((card) => {
      const cardInstance = new Uno(card.type as UnoCategoryType, card.num);
      return cardInstance;
    });
    setUnoCards(unoCards);
  }, []);

  return (
    <div
      className="bg-slate-100 p-10 text-center flex-1 "
      style={{ width: "100%" }}
    >
      <Deck allCards={standardCards} />
      <h2>Uno</h2>
      <Deck allCards={unoCards} />
    </div>
  );
}

export default App;
