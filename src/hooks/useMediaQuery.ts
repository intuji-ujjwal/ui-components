import { useState, useEffect } from 'react';
import useEventListener from './useEventListener';

export default function useMediaQuery(mediaQuery: string): boolean {
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(
    null,
  );

  useEffect(() => {
    const list: MediaQueryList = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener(
    'change',
    (e) => {
      const mediaEvent = e as MediaQueryListEvent;
      setIsMatch(mediaEvent.matches);
    },
    mediaQueryList,
  );

  return isMatch;
}
