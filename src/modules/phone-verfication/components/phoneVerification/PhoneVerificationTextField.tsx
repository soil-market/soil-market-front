import { ErrorResponse } from "@/api/firebase/type";
import TextField from "@/components/design/TextField";
import { ChangeEvent, memo } from "react";

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

  const confirmPhoneNumber = async () => {
    (await confirm)(text, onSuccess, onError);
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

export default memo(PhoneVerificationTextField);
