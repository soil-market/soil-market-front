import { CheckBox } from "@mui/icons-material";
import { TextField, Typography } from "@mui/material";
import { Form } from "react-hook-form";
import FindTextField from "../find/components/FindTextField";

export default function MarketForm() {
  return (
    <Form>
      <FindTextField />
      <div>
        <Typography variant="subtitle1">현장 위치를 알려주세요.</Typography>
        <Typography variant="subtitle2">추후에 수정도 가능해요.</Typography>

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
    </Form>
  );
}
