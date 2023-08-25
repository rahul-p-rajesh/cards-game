import ICard from "./Card";

export default class Uno implements ICard {
  id: string;
  mainIdentifier: string;
  subIdentifier: string;
  color: string;

  constructor(
    id: string,
    mainIdentifier: string,
    subIdentifier: string,
    color: string
  ) {
    this.id = id;
    this.mainIdentifier = mainIdentifier;
    this.subIdentifier = subIdentifier;
    this.color = color;
  }

  getTitle = () => this.mainIdentifier + " " + this.subIdentifier;

  doesCardsMatches = (comparer: Uno) => {
    return this.subIdentifier === comparer.subIdentifier;
  };
}
