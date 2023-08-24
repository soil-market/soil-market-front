import { ErrorResponse } from "@/api/firebase/type";
import Countdown from "@/components/CountDown";
import Button from "@/components/design/Button";
import TextField from "@/components/design/TextField";
import PageLayout from "@/components/layout/PageLayout";
import { Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import usePhoneVerificationRecoil from "../usePhoneVerfication.recoil";

export default function PhenVerification() {
  const [text, setText] = useState("");

  const [error, setError] = useState<ErrorResponse | null>(null);

  const [countDown, setCountdown] = useState(false);

  const { phoneVerification } = usePhoneVerificationRecoil();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const confirm = import("@/api/firebase/firebase").then(
    (module) => module.confirmPhoneNumber
  );

  useEffect(() => {
    if (text.length === 6) {
      const confirmPhoneNumber = async () => {
        const res = (await confirm)(
          text,
          () => {},
          (error) => {
            setError(error);
            setText("");
          }
        );
      };

      confirmPhoneNumber();
    }
  }, [confirm, text]);

  let verifyPhoneNumber: (
    phoneNumber: string,
    onSuccess: () => void,
    onError: (error: any) => void
  ) => void;

  import("@/api/firebase/firebase").then((module) => {
    verifyPhoneNumber = module.verifyPhoneNumber;
  });

  const onClick = () => {
    verifyPhoneNumber(
      phoneVerification.phone,
      () => {
        alert("인증번호가 재발송되었어요.");
      },
      (error) => {
        setError(error);
      }
    );
  };

  return (
    <PageLayout className="justify-around h-full">
      <div>
        <Typography variant="h6">문자로 받은</Typography>
        <Typography variant="h6">인증 번호 6자리를 알려주세요.</Typography>
      </div>
      <div className="flex flex-col gap-12">
        <div className="w-full flex gap-12 items-center">
          <TextField
            error={!!error}
            helperText={error?.message}
            value={text}
            onChange={onChange}
            style={{ width: "100%" }}
          />
          <Countdown time={10} onEnd={() => setCountdown(true)} />
        </div>

        <div>
          <Button onClick={onClick} style={{}} size="small">
            인증번호 다시 받기
          </Button>
        </div>
      </div>
      <Button onClick={() => console.log(Countdown)} disabled={countDown}>
        다음으로
      </Button>
    </PageLayout>
  );
}
