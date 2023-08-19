import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { ProcessKey } from "./type";

const key = new Date().getMilliseconds();

const initialMap = new Map<ProcessKey, { current: number; last: number }>();
initialMap.set("phone-verification", { current: 0, last: 1 });
initialMap.set("sign-up", { current: 0, last: 1 });

const processAtom = atom({
  key: `process ${key}`,
  default: initialMap,
});

export default function useProcessIndex(processName: ProcessKey) {
  const process = useRecoilValue(processAtom).get(processName) as {
    current: number;
    last: number;
  };

  const setProcess = useSetRecoilState(processAtom);

  const prev = () => {
    if (process.current === 0) return;
    setProcess((prev) => {
      const newMap = new Map(prev);
      newMap.set(processName, { ...process, current: process.current - 1 });

      return newMap;
    });
  };

  const next = () => {
    if (process.current === process.last) return;
    setProcess((prev) => {
      const newMap = new Map(prev);
      newMap.set(processName, { ...process, current: process.current + 1 });

      return newMap;
    });
  };

  return { index: process.current, prev, next };
}
