import Button from "@/components/design/Button";
import Header from "@/components/shared/header/Header";
import { TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function Feedback() {
  const [value, setValue] = useState("");

  const maxLength = 100;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (value.length < maxLength) {
      setValue(e.target.value);
    }
  };

  return (
    <div className="flex flex-col justify-between pt-80 px-20 gap-20 h-full pb-[107px]">
      <Header text={"의견을 남겨주세요"} />
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
