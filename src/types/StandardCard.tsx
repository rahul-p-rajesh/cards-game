import ICard, { CardType, ICardMetaData } from "./Card";

export type CardSuitType = "hearts" | "spades" | "clubs" | "diamonds";

export interface IStandardCardMetadata extends ICardMetaData {
  suit: CardSuitType;
  color: string;
  num: string;
}

export default class StandardCard implements ICard<IStandardCardMetadata> {
  private id = "";
  metaData: IStandardCardMetadata = {
    type: CardType.playingCards,
    suit: "hearts",
    num: "",
    color: "bg-rose-500",
  };

  constructor(metaData: IStandardCardMetadata, id?: string) {
    this.metaData = { ...metaData, type: CardType.playingCards };
    this.id = id ? id : this.generateId();
  }

  public doesCardsMatches(comparer: ICard<IStandardCardMetadata>): boolean {
    return this.metaData.num === comparer.metaData.num;
  }

  private generateId(): string {
    return this.metaData.suit + "-of-" + this.metaData.num;
  }

  public getId(): string {
    return this.id;
  }

  public getColor() {
    return this.metaData.color;
  }

  public getCardValue() {
    return this.metaData.num + "";
  }

  public getCardCategory() {
    return this.metaData.suit;
  }
}
