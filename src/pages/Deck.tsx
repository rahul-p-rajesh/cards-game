import { Card } from "../components/Card/CardContainer";
import { CardType } from "../types/Card";
// import { usePub } from "../hooks/pubSub";
import { useTwoCardsChecker } from "../hooks/useTwoCardsChecker";

interface IProps<T> {
  allCards: T[];
  deckId: string;
}

export const Deck = (props: IProps<CardType>) => {
  const { allCards } = props;

  const twoCardsEngine = useTwoCardsChecker({
    allCards: allCards,
  });

  return (
    <div
      className="border-2 border-neutral-600 rounded pb-3"
      style={{
        display: "flex",
        flexFlow: "row wrap",
        width: "80%",
        height: "fit-content",
        minHeight: "400px",
      }}
    >
      {allCards.map((card) => {
        return (
          <div key={card.getId()}>
            <Card
              onClick={() => twoCardsEngine.onCardClick(card)}
              cardData={card}
              isCurrentCardOpened={twoCardsEngine.isCardOpened}
            />
          </div>
        );
      })}
    </div>
  );
};
