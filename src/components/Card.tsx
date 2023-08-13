interface IProps {
  id: string;
  suit: "diamonds" | "hearts" | "spades" | "clubs";
  cardNum: string;
  toShow: boolean;
}

export const Card = ({ id, suit, cardNum, toShow }: IProps) => {
  // const [suit, setSuit] = useState<string>(suitProp);
  // const [cardNumber, setCardNumber] = useState<string>(cardNumProp);
  // const [toShow, setToShow] = useState<boolean>(toShowProp);
  return (
    <div
      id={id}
      className="m-2 border-2 border-neutral-600 rounded text-stone-100"
      style={{ height: "100%" }}
    >
      {toShow ? (
        <div
          className={`${
            suit === "diamonds" || suit === "hearts"
              ? "bg-rose-500"
              : "bg-gray-500"
          } flex flex-col justify-center `}
          style={{ width: "100%", height: "100%" }}
        >
          <h6>{cardNum} of</h6>
          <h5>{suit}</h5>
        </div>
      ) : (
        <div
          className="bg-indigo-50"
          style={{ width: "100%", height: "100%" }}
        ></div>
      )}
    </div>
  );
};
