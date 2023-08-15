import Button from "@/components/design/Button";
import TextField from "@/components/design/TextField";
import { Typography } from "@mui/material";

export default function PhenVerification() {
  return (
    <div className="h-full flex flex-col justify-around p-20">
      <div>
        <Typography variant="h6">문자로 받은</Typography>
        <Typography variant="h6">인증 번호 6자리를 알려주세요.</Typography>
      </div>
      <div className="flex flex-col gap-12">
        <div className="w-full flex gap-12 items-center">
          <TextField style={{ width: "100%" }} />
          <div>3:00</div>
        </div>

        <div>
          <Button style={{}} size="small">
            인증번호 다시 받기
          </Button>
        </div>
      </div>
      <Button>다음으로</Button>
    </div>
  );
}
