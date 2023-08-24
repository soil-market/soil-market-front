import { ErrorResponse } from "@/api/firebase/type";
import Button from "@/components/design/Button";
import TextField from "@/components/design/TextField";
import PageLayout from "@/components/layout/PageLayout";
import useProcessIndex from "@/components/shared/process/useProcessIndex";
import { Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import usePhoneVerificationRecoil from "../usePhoneVerfication.recoil";

export default function PhoneTextField() {
  const [text, setText] = useState("");

  const [error, setError] = useState<ErrorResponse | null>(null);

  const { setPhoneVerification } = usePhoneVerificationRecoil();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  let verifyPhoneNumber: (
    phoneNumber: string,
    onSuccess: () => void,
    onError: (error: any) => void
  ) => void;

  import("@/api/firebase/firebase").then((module) => {
    verifyPhoneNumber = module.verifyPhoneNumber;
  });

  const { next } = useProcessIndex("phone-verification");

  const onClick = () => {
    verifyPhoneNumber(
      text,
      () => {
        setPhoneVerification((prev) => ({
          ...prev,
          phone: text,
        }));
        next();
      },
      (error) => {
        setError(error);
      }
    );
  };

  return (
    <PageLayout className="justify-between h-full">
      <div>
        <Typography variant="h6">토사장터에 오신걸 환영합니다!</Typography>
        <Typography variant="h6">시작에 앞서 휴대폰 인증이 필요해요</Typography>
        <Typography variant="subtitle1">휴대폰 인증 하나로 간편가입</Typography>
      </div>
      <div className="flex flex-col gap-12">
        <Typography variant="subtitle2">입력한 정보를 확인해주세요</Typography>
        <TextField
          error={!!error}
          helperText={error?.message}
          value={text}
          onChange={onChange}
          label={"휴대폰 번호"}
        />
      </div>

      <Button onClick={onClick}>인증 번호 받기</Button>
    </PageLayout>
  );
}
