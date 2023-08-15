import Button from "@/components/design/Button";
import TextField from "@/components/design/TextField";
import { Typography } from "@mui/material";

export default function PhoneTextField() {
  return (
    <div className="p-20 flex flex-col justify-between h-full">
      <div>
        <Typography variant="h6">토사장터에 오신걸 환영합니다!</Typography>
        <Typography variant="h6">시작에 앞서 휴대폰 인증이 필요해요</Typography>
        <Typography variant="subtitle1">휴대폰 인증 하나로 간편가입</Typography>
      </div>
      <div className="flex flex-col gap-12">
        <Typography variant="subtitle2">입력한 정보를 확인해주세요</Typography>
        <TextField type="number" label={"휴대폰 번호"} />
      </div>

      <Button>인증 번호 받기</Button>
    </div>
  );
}
