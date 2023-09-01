import { useState } from "react";
import { Card } from "../components/Card/CardContainer";
import ICard, { ICardMetaData } from "../components/PlayingCards/Card";

interface IProps<T extends ICardMetaData> {
  allCards: ICard<T>[];
}

//!FIXME how do i make this absolutely compatible with any card
export const Deck = <TMetaData extends ICardMetaData>(
  props: IProps<TMetaData>
) => {
  const { allCards } = props;

  //2. cards that are opened in past and currently opened
  const [cardOpened, setCardsOpened] = useState<string[]>([]);

  //3. clickAllowed: should the user be allowed to select a card
  const [clickAllowed, setClickAllowed] = useState<boolean>(true);

  /**
   *
   * @param card
   * makes a copy of an array
   * then using splice to remove the card if exist
   */
  const removeCard = (card: ICard<TMetaData>) => {
    const cardsOpenedUpdated = [...cardOpened];
    cardsOpenedUpdated.splice(cardsOpenedUpdated.indexOf(card.getId()), 1); //deleting
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
  const addCardIfGameConditionsMeet = (card: ICard<TMetaData>) => {
    const updatedCards = [...cardOpened];

    const lastOpenedCardId = cardOpened[cardOpened.length - 1];
    const lastOpenedCard = allCards.find((c) => c.getId() === lastOpenedCardId);

    setClickAllowed(false);
    updatedCards.push(card.getId());
    setCardsOpened(updatedCards);

    if (!lastOpenedCard) {
      setClickAllowed(true);
      return;
    }

    if (
      updatedCards.length % 2 === 0 &&
      !lastOpenedCard.doesCardsMatches(card)
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

  const onCardClick = (card: ICard<TMetaData>) => {
    if (shouldCardOpened(card.getId())) {
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
        const toShowCard = shouldCardOpened(card.getId());

        return (
          <div
            key={card.getId()}
            onClick={() => onCardClick(card)}
            style={{ height: "150px", width: "100px" }}
          >
            <Card metaData={card.metaData} toShow={toShowCard} />
          </div>
        );
      })}
    </div>
  );
};
