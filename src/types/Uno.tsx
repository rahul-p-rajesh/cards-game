import ICard, { CardType, CardTypeEnum, ICardMetaData } from "./Card";

export type UnoCategoryType = "red" | "orange" | "green" | "blue";

export interface IUnoMetadata extends ICardMetaData {
  category: UnoCategoryType;
  color: string;
  value: string;
}

export default class Uno implements ICard<IUnoMetadata> {
  private id = "";
  metaData: IUnoMetadata;

  constructor(type: UnoCategoryType, value: string, id?: string) {
    const color = this.generateUnoColor(type);

    this.metaData = {
      type: CardTypeEnum.uno,
      category: type as UnoCategoryType,
      value: value,
      color: color,
    };

    this.id = id !== undefined ? this.id : this.generateId();
  }

  private generateUnoColor(color: UnoCategoryType) {
    let bgColor = "bg-red-500";

    if (color === "orange") {
      bgColor = "bg-orange-500";
    } else if (color === "green") {
      bgColor = "bg-lime-400";
    } else if (color === "blue") {
      bgColor = "bg-sky-400";
    }
    return bgColor;
  }

  public doesCardsMatches(comparer: CardType): boolean {
    if (comparer.metaData.type === this.metaData.type) {
      return this.metaData.value === (comparer.metaData as IUnoMetadata).value;
    }
    return false;
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
