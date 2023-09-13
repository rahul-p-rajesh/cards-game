import { useEffect, useState } from "react";
import { CardType } from "../../types/Card";
import "./CardContainer.css";
import { useSub } from "../../hooks/pubSub";

interface IProps<T extends CardType> {
  cardData: T;
}

const mountedStyle = {
  animation: "inAnimation 250ms ease-in",
  width: "100%",
  height: "100%",
};
const unmountedStyle = {
  animation: "outAnimation 2000ms ease-out",
  animationFillMode: "forwards",
  width: "100%",
  height: "100%",
};

export const Card = ({ cardData }: IProps<CardType>) => {
  const [id] = useState(cardData.getId());
  const [suit, setSuit] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [color, setColor] = useState<string>("bg-rose-500");
  const [toShow, setToShow] = useState<boolean>(false);

  useSub("OPEN_CARD", ({ cardId }) => {
    if (id === cardId) setToShow(true);
  });

  useSub("CLOSE_CARD", ({ cardId }) => {
    if (id === cardId) {
      setTimeout(() => setToShow(false), 200);
    }
  });

  useEffect(() => {
    setColor(cardData.getColor());
    setCardNumber(cardData.getCardValue());
    setSuit(cardData.getCardCategory());
  }, [cardData]);

  return (
    <div className="card-wrapper m-2 border-2 border-neutral-600 rounded text-stone-100 card-arent">
      {toShow ? (
        <div
          className={`card   ${color} flex flex-col justify-center `}
          style={toShow ? mountedStyle : unmountedStyle}
        >
          <h6>{cardNumber} of</h6>
          <h5>{suit}</h5>
        </div>
      ) : (
        <div
          className="card card-back bg-indigo-50"
          style={{ width: "100%", height: "100%" }}
        ></div>
      )}
    </div>
  );
};
