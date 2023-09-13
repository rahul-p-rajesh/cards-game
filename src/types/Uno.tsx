import ICard, { CardType, ICardMetaData } from "./Card";

export interface IUnoMetadata extends ICardMetaData {
  category: "red" | "orange" | "green" | "blue";
  color: string;
  value: string;
}

export default class Uno implements ICard<IUnoMetadata> {
  private id = "";
  metaData: IUnoMetadata = {
    type: CardType.uno,
    category: "red",
    value: "reverse",
    color: "bg-rose-500",
  };

  constructor(metaData: IUnoMetadata, id?: string) {
    this.metaData = { ...metaData, type: CardType.uno };

    this.id = id !== undefined ? this.id : this.generateId();
  }

  public doesCardsMatches(comparer: ICard<IUnoMetadata>): boolean {
    return this.metaData.value === comparer.metaData.value;
  }

  private generateId(): string {
    return this.metaData.category + "-of-" + this.metaData.value;
  }

  public getId(): string {
    return this.id;
  }

  public getColor() {
    return this.metaData.color;
  }

  getCardValue() {
    return this.metaData.value;
  }

  getCardCategory() {
    return this.metaData.category;
  }
}
