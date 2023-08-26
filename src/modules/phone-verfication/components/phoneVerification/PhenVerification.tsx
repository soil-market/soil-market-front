import { ErrorResponse } from "@/api/firebase/type";
import Countdown from "@/components/CountDown";
import Button from "@/components/design/Button";
import PageLayout from "@/components/layout/PageLayout";
import useGetAccessToken from "@/react-query/public/useGetAccessToken";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import usePhoneVerificationRecoil from "../../usePhoneVerfication.recoil";
import PhoneVerificationTextField from "./PhoneVerificationTextField";

export default function PhenVerification() {
  const [text, setText] = useState("");

  const [error, setError] = useState<ErrorResponse | null>(null);

  const [idToken, setIdToken] = useState("");

  const [timeEnd, setTimeEnd] = useState(false);

  const { phoneVerification } = usePhoneVerificationRecoil();

  const { mutate } = useGetAccessToken({
    onSuccess: (res) => {
      localStorage.setItem("access_token", res.AccessToken);
      push("sign-up");
    },
  });

  const { push } = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (text.length < 6) {
      setText(e.target.value);
    }
  };

  const signUp = async (idToken: string) => {
    mutate(idToken);
  };

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

  const onSuccess = async (result: { _tokenResponse: { idToken: any } }) => {
    const idToken = result._tokenResponse.idToken;
    setIdToken(idToken);
    alert("인증되었어요!");
  };

  const onError = (error: ErrorResponse | null) => {
    setError(error);
    setText("");
  };

  return (
    <PageLayout className="justify-around h-full">
      <div>
        <Typography variant="h6">문자로 받은</Typography>
        <Typography variant="h6">인증 번호 6자리를 알려주세요.</Typography>
      </div>
      <div className="flex flex-col gap-12">
        <div className="w-full flex gap-12 items-center">
          <PhoneVerificationTextField
            timeEnd={timeEnd}
            onChange={onChange}
            text={text}
            error={error}
            onError={onError}
            onSuccess={onSuccess}
          />
          <Countdown time={180} onEnd={() => setTimeEnd(true)} />
        </div>

        <div>
          <Button onClick={onClick} size="small">
            인증번호 다시 받기
          </Button>
        </div>
      </div>
      <Button onClick={() => signUp(idToken)} disabled={!idToken}>
        다음으로
      </Button>
    </PageLayout>
  );
}
