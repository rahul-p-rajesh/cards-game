import { useEffect, useState } from "react";
import { CardType } from "../../types/Card";
import "./CardContainer.css";
// import { useSub } from "../../hooks/pubSub";

interface IProps<CardType> {
  cardData: CardType;
  isCurrentCardOpened: (id: string) => boolean;
  onClick: (card: CardType) => void;
  isClickAllowed: boolean;
}

export const Card = ({
  cardData,
  isCurrentCardOpened,
  onClick,
  isClickAllowed,
}: IProps<CardType>) => {
  const [suit, setSuit] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [color, setColor] = useState<string>("bg-rose-500");
  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    setColor(cardData.getColor());
    setCardNumber(cardData.getCardValue());
    setSuit(cardData.getCardCategory());
  }, [cardData]);

  useEffect(() => {
    if (isOpened) {
      setTimeout(() => {
        setIsOpened(isCurrentCardOpened(cardData.getId()));
      }, 450);
    } else {
      setIsOpened(isCurrentCardOpened(cardData.getId()));
    }
  }, [isOpened, isCurrentCardOpened, cardData]);

  const onCardClick = () => {
    if (!isClickAllowed) {
      return;
    }
    setIsOpened(true);
    onClick(cardData);
  };

  return (
    <div
      style={{ width: "150px", height: "250px" }}
      className=" m-2 border-2 border-neutral-600 rounded text-stone-100 "
    >
      {isOpened ? (
        <div
          style={{ width: "100%", height: "100%" }}
          className={`card   ${color} flex flex-col justify-center `}
        >
          <h6>{cardNumber} of</h6>
          <h5>{suit}</h5>
        </div>
      ) : (
        <div
          onClick={onCardClick}
          className="card card-back bg-indigo-50"
          style={{ width: "100%", height: "100%" }}
        ></div>
      )}
    </div>
  );
};
