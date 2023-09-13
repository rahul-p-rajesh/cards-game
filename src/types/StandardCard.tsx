import ICard, { CardType, CardTypeEnum, ICardMetaData } from "./Card";

export type StandardCardSuitType = "hearts" | "spades" | "clubs" | "diamonds";

export interface IStandardCardMetadata extends ICardMetaData {
  suit: StandardCardSuitType;
  color: string;
  num: string;
}

export default class StandardCard implements ICard<IStandardCardMetadata> {
  private id = "";
  metaData: IStandardCardMetadata;

  constructor(
    suit: StandardCardSuitType,
    num: string,

    id?: string
  ) {
    const color = this.generateColor(suit);
    this.metaData = {
      suit: suit,
      num: num,
      color: color,
      type: CardTypeEnum.playingCards,
    };
    this.id = id ? id : this.generateId();
  }

  private generateColor(suit: StandardCardSuitType) {
    return suit === "hearts" || suit === "diamonds"
      ? "bg-rose-500"
      : "bg-gray-500";
  }

  public doesCardsMatches(comparer: CardType): boolean {
    if (comparer.metaData.type === this.metaData.type) {
      return (
        this.metaData.num === (comparer.metaData as IStandardCardMetadata).num
      );
    }
    return false;
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
