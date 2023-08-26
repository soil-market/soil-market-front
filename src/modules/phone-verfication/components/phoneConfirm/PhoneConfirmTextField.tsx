import { ErrorResponse } from "@/api/firebase/type";
import TextField from "@/components/design/TextField";
import useLoadingRecoil from "@/recoil/useLoading.recoil";
import { ChangeEvent } from "react";

type PhoneConfirmTextFieldProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  error: ErrorResponse | null;
  onError: (error: ErrorResponse | null) => void;
  onSuccess: (result: { _tokenResponse: { idToken: any } }) => void;
  timeEnd: boolean;
};
function PhoneConfirmTextField({
  onChange,
  text,
  error,
  onSuccess,
  onError,
  timeEnd,
}: PhoneConfirmTextFieldProps) {
  const { setLoading } = useLoadingRecoil();

  const confirm = import("@/api/firebase/firebase").then(
    (module) => module.confirmPhoneNumber
  );

  const confirmPhoneNumber = async () => {
    if (timeEnd) {
      alert("인증시간이 만료되었어요.");
      return;
    }
    setLoading(true);
    (await confirm)(
      text,
      (result) => {
        setLoading(false);
        onSuccess(result);
      },
      (error) => {
        setLoading(false);
        onError(error);
      }
    );
  };

  return (
    <TextField
      error={!!error}
      helperText={error?.message}
      value={text}
      onChange={onChange}
      style={{ width: "100%" }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          confirmPhoneNumber();
        }
      }}
    />
  );
}

export default PhoneConfirmTextField;
