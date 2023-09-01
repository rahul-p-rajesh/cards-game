import ICard, { CardType, ICardMetaData } from "./Card";

export interface IStandardCardMetadata extends ICardMetaData {
  suit: "hearts" | "spades" | "clubs" | "diamonds";
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

  doesCardsMatches(comparer: ICard<IStandardCardMetadata>): boolean {
    return this.metaData.num === comparer.metaData.num;
  }

  generateId(): string {
    return this.metaData.suit + "-of-" + this.metaData.num;
  }

  public getId(): string {
    return this.id;
  }
}
