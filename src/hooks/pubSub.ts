import { useCallback, useEffect } from "react";
import { EventEmitter } from "eventemitter3";

const emitter = new EventEmitter();

export interface ICardDataEvent {
  cardId: string;
}

export const usePub = () => {
  return (
    event: "OPEN_CARD" | "CLOSE_CARD",
    data: ICardDataEvent,
    deckId: string
  ) => {
    emitter.emit(event, data, deckId);
  };
};

export const useSub = (
  event: "OPEN_CARD" | "CLOSE_CARD",
  callback: (data: ICardDataEvent, deckId: string) => void
) => {
  const unsubscribe = useCallback(() => {
    emitter.off(event, callback);
  }, [callback, event]);

  useEffect(() => {
    emitter.on(event, callback);
    return unsubscribe;
  }, [callback, event, unsubscribe]);

  return unsubscribe;
};
