import "./Card.css";

interface IProps {
  suit: "diamonds" | "hearts" | "spades" | "clubs";
  cardNum: string;
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

export const Card = ({ suit, cardNum, toShow }: IProps) => {
  // const [suit, setSuit] = useState<string>(suitProp);
  // const [cardNumber, setCardNumber] = useState<string>(cardNumProp);
  // const [toShow, setToShow] = useState<boolean>(toShowProp);
  return (
    <div className="card-wrapper m-2 border-2 border-neutral-600 rounded text-stone-100 card-arent">
      {toShow ? (
        <div
          className={`card   ${
            suit === "diamonds" || suit === "hearts"
              ? "bg-rose-500"
              : "bg-gray-500"
          } flex flex-col justify-center `}
          style={toShow ? mountedStyle : unmountedStyle}
        >
          <h6>{cardNum} of</h6>
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
