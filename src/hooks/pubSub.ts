import { useCallback, useEffect } from "react";
import { EventEmitter } from "eventemitter3";

const emitter = new EventEmitter();

export interface ICardDataEvent {
  cardId: string;
}

export const usePub = () => {
  return (event: "OPEN_CARD" | "CLOSE_CARD", data: ICardDataEvent) => {
    emitter.emit(event, data);
  };
};

export const useSub = (
  event: "OPEN_CARD" | "CLOSE_CARD",
  callback: (data: ICardDataEvent) => void
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
