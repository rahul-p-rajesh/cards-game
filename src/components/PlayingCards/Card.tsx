export enum CardType {
  playingCards = "PLAYING_CARS",
  uno = "UNO",
}

export interface ICardMetaData {
  type: string;
}

export default interface ICard<TMetaData extends ICardMetaData> {
  // id: string; // ! FIXME: if i uncomment it i cant make it private in the child inheriting
  metaData: TMetaData;

  getId: () => string;

  doesCardsMatches: (comparer: ICard<TMetaData>) => boolean;
}
1;
