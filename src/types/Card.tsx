import StandardCard from "./StandardCard";
import Uno from "./Uno";

export enum CardTypeEnum {
  playingCards = "PLAYING_CARS",
  uno = "UNO",
}

//TODO:Dis-Joint Principle
export interface ICardMetaData {
  type: CardTypeEnum;
}

export type CardType = StandardCard | Uno;

export default interface ICard<TMetaData extends ICardMetaData> {
  // id: string;
  metaData: TMetaData;

  /**
   * check if the 2 cards are of same suit/category
   * @param comparer
   * @returns
   */
  doesCardsMatches: (comparer: CardType) => boolean;

  getId: () => string;

  /**
   * represents the color card should have when it is selected i.e face up
   * @returns string
   */
  getColor: () => string;

  /**
   * represent the value assigned to the card i.e the card number in standard card o
   * @returns string
   */
  getCardValue: () => string;

  /**
   * represent which type of card it is / or suit i.e clubs or diamonds in standard card
   * @returns string
   */
  getCardCategory: () => string;
}
