import { generateUniqueID } from "@/utils/generateUniqueId";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const loadingAtom = atom({
  key: `loading ${generateUniqueID()}`,
  default: false,
});

/**
 * 화면 전체에 나타나는 로딩 컴포넌트 제어 훅
 */
export default function useLoadingRecoil() {
  const isLoading = useRecoilValue(loadingAtom);
  const setLoading = useSetRecoilState(loadingAtom);

  return {
    isLoading,
    setLoading,
  };
}
