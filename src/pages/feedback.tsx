import Button from "@/components/design/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export default function Feedback() {
  const { back } = useRouter();

  const [value, setValue] = useState("");

  const maxLength = 100;

  const goBack = () => {
    back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (value.length < maxLength) {
      setValue(e.target.value);
    }
  };

  return (
    <div className="flex flex-col justify-between pt-80 px-20 gap-20 h-full pb-[107px]">
      <div className="fixed top-0 left-0 h-60 flex justify-start gap-12 items-center w-full">
        <ArrowBackIcon
          className="absolute top-[17px] left-[15px]"
          onClick={goBack}
        >
          뒤로 가기
        </ArrowBackIcon>
        <div className="flex flex-1 justify-center">
          <Typography variant="h6">의견을 남겨 주세요.</Typography>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <TextField
          value={value}
          onChange={onChange}
          rows={12}
          multiline
          placeholder="예) 오류가 있어요."
        />
        <Typography variant="body2" align="right">
          {value.length}/100
        </Typography>
      </div>
      <Button>의견 보내기</Button>
    </div>
  );
}
