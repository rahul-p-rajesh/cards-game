import { useState } from "react";
import { Card } from "../components/Card";
import { CardType } from "../types/CardTypes";

export const Deck = () => {
  //1. arr to store the list of all the 52 card
  const [allCards] = useState<CardType[]>([
    { id: "hearts-ace", suit: "hearts", cardNum: "ace" },
    { id: "diamonds-ace", suit: "diamonds", cardNum: "ace" },
    { id: "spades-ace", suit: "spades", cardNum: "ace" },
    { id: "spades-five", suit: "spades", cardNum: "five" },
  ]);

  //2. cards that are opened in past and currently opened
  const [cardOpened, setCardsOpened] = useState<string[]>([]);

  //3. clickAllowed: should the user be allowed to select a card
  const [clickAllowed, setClickAllowed] = useState<boolean>(true);

  const addCardIfUnique = (card: CardType) => {
    const cardId = card.id;

    const cardsOpenedUpdated = [...cardOpened];

    if (!cardsOpenedUpdated.includes(cardId)) {
      cardsOpenedUpdated.push(cardId);
    }
    setCardsOpened(cardsOpenedUpdated);
  };

  const addCardIfValid = (card: CardType) => {
    const lastOpenedCardId = cardOpened[cardOpened.length - 1];
    const lastOpenedCard = allCards.find((c) => c.id === lastOpenedCardId);

    if (!lastOpenedCard) {
      return;
    }

    if (lastOpenedCard.cardNum === card.cardNum) {
      addCardIfUnique(card);
    } else {
      const cardsOpenedUpdated = [...cardOpened];
      cardsOpenedUpdated.splice(
        cardsOpenedUpdated.indexOf(lastOpenedCard.id),
        1
      );
      setCardsOpened(cardsOpenedUpdated);
    }
  };

  const removeCard = (card: CardType) => {
    const cardsOpenedUpdated = [...cardOpened];
    cardsOpenedUpdated.splice(cardsOpenedUpdated.indexOf(card.id), 1); //deleting
    setCardsOpened(cardsOpenedUpdated);
  };

  //4. select a card
  const onCardClick = (card: CardType) => {
    if (!clickAllowed) {
      return;
    }
    if (cardOpened.includes(card.id)) {
      //if card is already opened, then remove it
      removeCard(card);
      return;
    }
    setClickAllowed(false);

    if (cardOpened.length % 2 === 0) {
      // if the array length is even that means add a new card
      addCardIfUnique(card);
    } else {
      //odd means game rules has to be checked and only added if game rules are valid
      addCardIfValid(card);
    }
    setClickAllowed(true);
  };

  const shouldCardOpened = (id: string) => {
    return cardOpened.includes(id);
  };

  return (
    <div
      className="flex border-2 border-neutral-600 rounded"
      style={{ height: "50%", minHeight: "400px" }}
    >
      {allCards.map((card) => (
        <div
          onClick={() => onCardClick(card)}
          style={{ height: "150px", width: "100px" }}
        >
          <Card
            id={card.id}
            suit={card.suit}
            cardNum={card.cardNum}
            toShow={shouldCardOpened(card.id)}
          />
        </div>
      ))}
    </div>
  );
};
