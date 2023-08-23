import Button from "@/components/design/Button";
import TextField from "@/components/design/TextField";
import PageLayout from "@/components/layout/PageLayout";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

export default function PhenVerification() {
  const [text, setText] = useState("");

  const { query } = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const confirm = import("@/api/firebase").then(
    (module) => module.confirmPhoneNumber
  );

  useEffect(() => {
    if (text.length === 6) {
      const confirmPhoneNumber = async () => {
        const res = (await confirm)(text);
      };

      confirmPhoneNumber();
    }
  }, [confirm, text]);

  let verifyPhoneNumber: (phoneNumber: string, onSuccess: () => void) => void;

  import("@/api/firebase").then((module) => {
    verifyPhoneNumber = module.verifyPhoneNumber;
  });

  const onClick = () => {
    verifyPhoneNumber(query.phone as string, () => {});
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
            value={text}
            onChange={onChange}
            style={{ width: "100%" }}
          />
          <div>3:00</div>
        </div>

        <div>
          <Button onClick={onClick} style={{}} size="small">
            인증번호 다시 받기
          </Button>
        </div>
      </div>
      <Button>다음으로</Button>
    </PageLayout>
  );
}
