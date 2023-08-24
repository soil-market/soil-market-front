import { ErrorResponse } from "@/api/firebase/type";
import TextField from "@/components/design/TextField";
import { ChangeEvent, memo, useEffect } from "react";

type PhoneVerificationTextFieldProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  error: ErrorResponse | null;
  onError: (error: ErrorResponse | null) => void;
  onSuccess: (result: { _tokenResponse: { idToken: any } }) => void;
};
function PhoneVerificationTextField({
  onChange,
  text,
  error,
  onSuccess,
  onError,
}: PhoneVerificationTextFieldProps) {
  const confirm = import("@/api/firebase/firebase").then(
    (module) => module.confirmPhoneNumber
  );

  useEffect(() => {
    if (text.length === 6) {
      const confirmPhoneNumber = async () => {
        (await confirm)(text, onSuccess, onError);
      };

      confirmPhoneNumber();
    }
  }, [confirm, onError, onSuccess, text]);

  return (
    <TextField
      error={!!error}
      helperText={error?.message}
      value={text}
      onChange={onChange}
      style={{ width: "100%" }}
    />
  );
}

export default memo(PhoneVerificationTextField);
