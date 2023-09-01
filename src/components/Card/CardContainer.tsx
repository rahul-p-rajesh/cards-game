import { useEffect, useState } from "react";
import { CardType, ICardMetaData } from "../PlayingCards/Card";
import "./CardContainer.css";
import { IStandardCardMetadata } from "../PlayingCards/StandardCard";
import { IUnoMetadata } from "../PlayingCards/Uno";

interface IProps<TMetaData> {
  metaData: TMetaData;

  toShow: boolean;
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

export const Card = ({ metaData, toShow }: IProps<ICardMetaData>) => {
  const [suit, setSuit] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [color, setColor] = useState<string>("bg-rose-500");
  //!FIXME: have i achieved proper reusability
  useEffect(() => {
    switch (metaData.type) {
      case CardType.playingCards:
        setColor((metaData as IStandardCardMetadata).color);
        setCardNumber((metaData as IStandardCardMetadata).num + "");
        setSuit((metaData as IStandardCardMetadata).suit);
        break;
      case CardType.uno:
        setColor((metaData as IUnoMetadata).color);
        setCardNumber((metaData as IUnoMetadata).value);
        setSuit((metaData as IUnoMetadata).category);
        break;

      default:
        break;
    }
  }, [metaData]);

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
