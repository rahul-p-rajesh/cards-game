// import { useState } from "react";
import { Card } from "../components/Card/CardContainer";
import { CardType } from "../types/Card";
// import { usePub } from "../hooks/pubSub";
import { useTwoCardsChecker } from "../hooks/useTwoCardsChecker";

interface IProps<T> {
  allCards: T[];
  deckId: string;
}

export const Deck = (props: IProps<CardType>) => {
  const { allCards, deckId } = props;

  const twoCardsEngine = useTwoCardsChecker({
    allCards: allCards,
    deckId: deckId,
  });

  const onCardClick = (card: CardType) => {
    twoCardsEngine.onCardClick(card);
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
            <Card cardData={card} deckId={deckId} />
          </div>
        );
      })}
    </div>
  );
};
