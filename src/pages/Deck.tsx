import { useState } from "react";
import { Card } from "../components/Card/CardContainer";

import ICard from "../components/PlayingCards/Card";
interface IProps<T> {
  allCards: T[];
}
export const Deck = (props: IProps<ICard>) => {
  const { allCards } = props;
  //1. arr to store the list of all the 52 card
  // const [allCards] = useState<CardType[]>([
  //   { id: "hearts-ace", suit: "hearts", cardNum: "ace" },
  //   { id: "spades-five", suit: "spades", cardNum: "five" },
  //   { id: "diamonds-ace", suit: "diamonds", cardNum: "ace" },
  //   { id: "diamonds-queen", suit: "diamonds", cardNum: "queen" },
  //   { id: "spades-ace", suit: "spades", cardNum: "ace" },
  //   { id: "spades-king", suit: "spades", cardNum: "king" },
  //   { id: "spades-queen", suit: "spades", cardNum: "queen" },
  //   { id: "clubs-queen", suit: "clubs", cardNum: "ace" },
  //   { id: "hearts-king", suit: "hearts", cardNum: "king" },
  //   { id: "hearts-queen", suit: "hearts", cardNum: "queen" },
  // ]);

  //2. cards that are opened in past and currently opened
  const [cardOpened, setCardsOpened] = useState<string[]>([]);

  //3. clickAllowed: should the user be allowed to select a card
  const [clickAllowed, setClickAllowed] = useState<boolean>(true);

  const removeCard = (card: ICard) => {
    const cardsOpenedUpdated = [...cardOpened];
    cardsOpenedUpdated.splice(cardsOpenedUpdated.indexOf(card.id), 1); //deleting
    setCardsOpened(cardsOpenedUpdated);
  };

  /**
   *
   * @param card
   * @returns void
   * add the newly clicked card to cardsOpened state
   * then if the the last card if exist it does not matches the newly clicked card then
   * after 1sec remove the card from cardsOpened state
   */
  const addCardIfGameConditionsMeet = (card: ICard) => {
    const updatedCards = [...cardOpened];

    const lastOpenedCardId = cardOpened[cardOpened.length - 1];
    const lastOpenedCard = allCards.find((c) => c.id === lastOpenedCardId);

    setClickAllowed(false);
    updatedCards.push(card.id);
    setCardsOpened(updatedCards);

    if (!lastOpenedCard) {
      setClickAllowed(true);
      return;
    }

    if (
      updatedCards.length % 2 === 0 &&
      lastOpenedCard.subIdentifier !== card.subIdentifier
    ) {
      setTimeout(() => {
        removeCard(card);
        removeCard(lastOpenedCard);
        setClickAllowed(true);
      }, 1000);
    } else {
      setClickAllowed(true);
    }
  };

  const shouldCardOpened = (id: string) => {
    return cardOpened.includes(id);
  };

  const onCardClick = (card: ICard) => {
    if (shouldCardOpened(card.id)) {
      return;
    }

    if (!clickAllowed) {
      return;
    }

    addCardIfGameConditionsMeet(card);
  };

  return (
    <div
      className="flex border-2 border-neutral-600 rounded pb-3"
      style={{ height: "500px", minHeight: "400px" }}
    >
      {allCards.map((card) => {
        const toShowCard = shouldCardOpened(card.id);

        return (
          <div
            key={card.id}
            onClick={() => onCardClick(card)}
            style={{ height: "150px", width: "100px" }}
          >
            <Card
              suit={card.mainIdentifier}
              cardNum={card.subIdentifier}
              color={card.color}
              toShow={toShowCard}
            />
          </div>
        );
      })}
    </div>
  );
};
