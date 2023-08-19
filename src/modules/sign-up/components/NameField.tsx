import Button from "@/components/design/Button";
import TextField from "@/components/design/TextField";
import { Typography } from "@mui/material";

export default function NameField() {
  return (
    <>
      <div>
        <Typography variant="h6">가입을 축하드려요!</Typography>
        <Typography variant="h6">성함 혹은 사업자명을 알려주세요.</Typography>
      </div>

      <TextField label="성함 혹은 사업자명" />

      <Button>다음</Button>
    </>
  );
}
