import { useEffect, useState } from "react";
import { CardType } from "../../types/Card";
import "./CardContainer.css";
// import { useSub } from "../../hooks/pubSub";

interface IProps<CardType> {
  cardData: CardType;
  isCurrentCardOpened: (id: string) => boolean;
  onClick: (card: CardType) => void;
}

export const Card = ({
  cardData,
  isCurrentCardOpened,
  onClick,
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
    if (isCurrentCardOpened(cardData.getId())) {
      setIsOpened(true);
    } else {
      setTimeout(() => {
        setIsOpened(false);
      }, 450);
    }
  }, [isOpened, isCurrentCardOpened, cardData]);

  const onCardClick = () => {
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
