import TextField from "@/components/design/TextField";
import Header from "@/components/shared/header/Header";
import { CheckBox } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import FindTextField from "../find/components/FindTextField";

export default function MarketForm() {
  const { pathname } = useRouter();

  const [header, setHeader] = useState(
    pathname === "/market/form/import" ? "토사 받아요" : "토사 나와요"
  );

  return (
    <>
      <Header text={header} />
      <form className="h-full px-20 pt-80 gap-80 flex flex-col">
        <div className="flex flex-col gap-20">
          <div>
            <Typography variant="subtitle1">현장 위치를 알려주세요.</Typography>
            <Typography variant="subtitle2">추후에 수정도 가능해요.</Typography>
            <FindTextField />
          </div>

          <div className="flex justify-between">
            <div>
              <Typography variant="body1">시작일시</Typography>
              <TextField type="date-local" />
            </div>
            <div>
              <Typography variant="body1">종료일시</Typography>
              <TextField type="date-local" />
              <CheckBox>협의</CheckBox>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <Typography variant="subtitle1">
              토사에 대한 정보도 알려주세요
            </Typography>
          </div>

          <TextField label="토사종류" />
          <TextField label="토사량 ()" />
          <TextField label="반출입 조건" minRows={4} />
          <TextField label="기타사항" minRows={2} />
        </div>
      </form>
    </>
  );
}
