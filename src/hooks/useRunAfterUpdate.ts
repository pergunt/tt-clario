import { useRef, useLayoutEffect } from 'react';

type RefFN = () => void;

const useRunAfterUpdate = () => {
  const afterPaintRef = useRef<RefFN | null>(null);

  useLayoutEffect(() => {
    if (afterPaintRef.current) {
      afterPaintRef.current();
      afterPaintRef.current = null;
    }
  });

  return (fn: RefFN) => (afterPaintRef.current = fn);
};

export default useRunAfterUpdate;
