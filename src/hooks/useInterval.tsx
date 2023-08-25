import { useEffect, useRef } from "react";

export default function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef(callback);
  let id = useRef<number | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      id.current = setInterval(tick, delay) as unknown as number;
      return () => clearInterval(id.current as number);
    }
  }, [delay]);

  return id.current;
}
