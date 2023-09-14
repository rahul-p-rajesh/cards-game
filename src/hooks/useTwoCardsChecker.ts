import { useState } from "react";
import { usePub } from "./pubSub";
import { CardType } from "../types/Card";

interface IProps<T> {
  allCards: T[];
  deckId: string;
}

export const useTwoCardsChecker = (props: IProps<CardType>) => {
  const { allCards, deckId } = props;

  console.log(deckId);

  const [cardsOpened, setCardsOpened] = useState<string[]>([]);

  const [clickAllowed, setClickAllowed] = useState<boolean>(true);

  const publish = usePub();

  /**
   *
   * @param card
   * makes a copy of an array
   * then using splice to remove the card if exist
   */
  const removeCard = (card: CardType) => {
    publish("CLOSE_CARD", { cardId: card.getId() }, deckId);
    const cardsOpenedUpdated = [...cardsOpened];
    cardsOpenedUpdated.splice(cardsOpenedUpdated.indexOf(card.getId()), 1); //deleting
    setCardsOpened(cardsOpenedUpdated);
  };

  /**
   *
   * @param card
   * makes a copy of an array
   * then using splice to remove the card if exist
   */
  const addCard = (card: CardType) => {
    const updatedCards = [...cardsOpened];
    updatedCards.push(card.getId());
    setCardsOpened(updatedCards);
  };

  /**
   *
   * @param card
   * @returns void
   * add the newly clicked card to cardsOpened state
   * then if the the last card if exist it does not matches the newly clicked card then
   * after 1sec remove the card from cardsOpened state
   */
  const addCardIfGameConditionsMeet = (card: CardType) => {
    setClickAllowed(false);

    const updatedCards = [...cardsOpened];

    const lastOpenedCardId = cardsOpened[cardsOpened.length - 1];
    const lastOpenedCard = allCards.find((c) => c.getId() === lastOpenedCardId);

    if (!lastOpenedCard) {
      addCard(card);
      setClickAllowed(true);
      return;
    }

    if (
      updatedCards.length % 2 !== 0 &&
      !lastOpenedCard.doesCardsMatches(card)
    ) {
      removeCard(card);
      removeCard(lastOpenedCard);
    } else {
      //to be added
      updatedCards.push(card.getId());
      setCardsOpened(updatedCards);
    }
    setClickAllowed(true);
  };

  const iscardsOpened = (id: string) => {
    return cardsOpened.includes(id);
  };

  const onCardClick = (card: CardType) => {
    const cardId = card.getId();
    if (iscardsOpened(cardId) || !clickAllowed) {
      return;
    }
    publish("OPEN_CARD", { cardId: card.getId() }, deckId);
    addCardIfGameConditionsMeet(card);
  };

  return {
    iscardsOpened,
    onCardClick,
  };
};
