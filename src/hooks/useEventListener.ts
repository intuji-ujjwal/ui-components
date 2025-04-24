import { useEffect, useRef } from 'react';

type EventTarget = Window | HTMLElement | MediaQueryList | null;

function useEventListener(
  eventType: string,
  callback: (event: Event) => void,
  element: EventTarget = window,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!element) return;

    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler as EventListener);

    return () =>
      element.removeEventListener(eventType, handler as EventListener);
  }, [eventType, element]);
}

export default useEventListener;
