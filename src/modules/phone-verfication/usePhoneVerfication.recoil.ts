import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const phoneVerificationAtom = atom({
  key: `phoneVerification${generateUniqueID()}`,
  default: {
    phone: "",
  },
});

export default function usePhoneVerificationRecoil() {
  const phoneVerification = useRecoilValue(phoneVerificationAtom);
  const setPhoneVerification = useSetRecoilState(phoneVerificationAtom);

  return {
    phoneVerification,
    setPhoneVerification,
  };
}
