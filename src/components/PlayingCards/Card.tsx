export default interface ICard {
  id: string;
  mainIdentifier: string;
  subIdentifier: string;
  color: string;

  doesCardsMatches: (comparer: ICard) => boolean;
}
