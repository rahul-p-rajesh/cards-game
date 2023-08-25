import ICard from "./Card";

export default class StandardCard implements ICard {
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

  doesCardsMatches = (comparer: StandardCard) => {
    return this.subIdentifier === comparer.subIdentifier;
  };
}
