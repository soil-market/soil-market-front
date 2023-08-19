import Button from "@/components/design/Button";
import { Typography } from "@mui/material";
import CompanyInformationTagList from "./CompanyInformationTagList";

export default function CompanyInformationField() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <Typography variant="h6">
          마지막으로 업체 정보를 선택해주세요.
        </Typography>
        <CompanyInformationTagList />
      </div>

      <Button>완료</Button>
    </>
  );
}
