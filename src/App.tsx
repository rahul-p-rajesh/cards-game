import { useEffect, useState } from "react";
import "./App.css";
import StandardCard, {
  IStandardCardMetadata,
} from "./components/PlayingCards/StandardCard";
import { Deck } from "./pages/Deck";
import Uno, { IUnoMetadata } from "./components/PlayingCards/Uno";
import { CardType } from "./components/PlayingCards/Card";

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

const allUnos = [
  { id: "red-zero", type: "red", num: "6" },
  { id: "yellow-zero", type: "yellow", num: "0" },
  { id: "yellow-one", type: "yellow", num: "1" },
  { id: "blue-five", type: "blue", num: "5" },
  { id: "green-zero", type: "green", num: "0" },
  { id: "green-one", type: "green", num: "1" },
  { id: "orange-zero", type: "green", num: "5" },
];

function App() {
  const [standardCards, setStandardCards] = useState<StandardCard[]>([]);

  const [unoCards, setUnoCards] = useState<Uno[]>([]);

  const getUnoColor = (color: string) => {
    let bgColor = "bg-red-500";
    if (color === "orange") {
      bgColor = "bg-orange-500";
    } else if (color === "green") {
      bgColor = "bg-lime-400";
    } else if (color === "yellow") {
      bgColor = "bg-yellow-400";
    }
    return bgColor;
  };

  useEffect(() => {
    const standardCardsClasses: StandardCard[] = allStandardCards.map(
      (card) => {
        const color =
          card.suit === "hearts" || card.suit === "diamonds"
            ? "bg-rose-500"
            : "bg-gray-500";

        const metaData: IStandardCardMetadata = {
          type: CardType.playingCards,
          suit: card.suit as "hearts" | "spades" | "clubs" | "diamonds",
          num: card.cardNum,
          color: color,
        };

        const cardInstance = new StandardCard(metaData, card.id);
        return cardInstance;
      }
    );
    setStandardCards(standardCardsClasses);

    const unos = allUnos.map((card) => {
      const color = getUnoColor(card.type);

      const metaData: IUnoMetadata = {
        type: CardType.uno,
        category: card.type as "red" | "orange" | "green" | "blue",
        value: card.num,
        color: color,
      };
      const cardInstance = new Uno(metaData);
      return cardInstance;
    });
    setUnoCards(unos);
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
