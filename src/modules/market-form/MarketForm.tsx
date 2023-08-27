import Button from "@/components/design/Button";
import TextArea from "@/components/design/TextArea";
import TextField from "@/components/design/TextField";
import Header from "@/components/shared/header/Header";
import ImageUpload from "@/components/shared/image-upload/ImageUpload";
import { CheckBox } from "@mui/icons-material";
import { Typography } from "@mui/material";
import FindTextField from "../find/components/FindTextField";

type MarketFormProps = {
  type: "import" | "export";
};
export default function MarketForm({ type }: MarketFormProps) {
  const header = type === "import" ? "토사 받아요" : "토사 나와요";

  return (
    <div className="pb-40 pt-80 px-20">
      <Header text={header} />
      <form className="h-full gap-80 flex flex-col">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-20">
            <div>
              <Typography variant="subtitle1">
                현장 위치를 알려주세요.
              </Typography>
              <Typography variant="caption">
                *추후에 수정도 가능해요.
              </Typography>
            </div>
            <FindTextField />
          </div>

          <div className="flex gap-20 items-center justify-between">
            <div>
              <TextField type="date-local" label="시작일시" />
            </div>
            <Typography variant="subtitle1">-</Typography>
            <div>
              <TextField type="date-local" label="종료일시" />
            </div>
          </div>
          <div className="flex justify-end">
            협의
            <CheckBox></CheckBox>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <Typography variant="subtitle1">
              토사에 대한 정보도 알려주세요
            </Typography>
            <ImageUpload />
          </div>

          <TextField label="토사종류" />
          <TextField label="토사량 (㎥)" />
          <TextField label="토사용도" />
          <TextArea label="반출입 조건" multiline minRows={4} />
          <TextArea label="기타사항" multiline minRows={2} />
        </div>
        <Button>현장 등록</Button>
      </form>
    </div>
  );
}
