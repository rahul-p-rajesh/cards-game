import { useState } from "react";
import { Card } from "../components/Card/CardContainer";
import { CardType } from "../types/Card";
import { usePub } from "../hooks/pubSub";

interface IProps<T> {
  allCards: T[];
}

export const Deck = (props: IProps<CardType>) => {
  const { allCards } = props;

  //2. cards that are opened in past and currently opened
  const [cardOpened, setCardsOpened] = useState<string[]>([]);

  //3. clickAllowed: should the user be allowed to select a card
  const [clickAllowed, setClickAllowed] = useState<boolean>(true);

  const publish = usePub();

  /**
   *
   * @param card
   * makes a copy of an array
   * then using splice to remove the card if exist
   */
  const removeCard = (card: CardType) => {
    publish("CLOSE_CARD", { cardId: card.getId() });
    const cardsOpenedUpdated = [...cardOpened];
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
    const updatedCards = [...cardOpened];
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

    const updatedCards = [...cardOpened];

    const lastOpenedCardId = cardOpened[cardOpened.length - 1];
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

  const isCardOpened = (id: string) => {
    return cardOpened.includes(id);
  };

  const onCardClick = (card: CardType) => {
    const cardId = card.getId();
    if (isCardOpened(cardId) || !clickAllowed) {
      return;
    }
    publish("OPEN_CARD", { cardId: card.getId() });
    addCardIfGameConditionsMeet(card);
  };

  return (
    <div
      className="flex border-2 border-neutral-600 rounded pb-3"
      style={{ height: "500px", minHeight: "400px" }}
    >
      {allCards.map((card) => {
        return (
          <div
            key={card.getId()}
            onClick={() => onCardClick(card)}
            style={{ height: "150px", width: "100px" }}
          >
            <Card cardData={card} />
          </div>
        );
      })}
    </div>
  );
};
