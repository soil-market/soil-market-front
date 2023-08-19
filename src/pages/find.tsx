import Button from "@/components/design/Button";
import PageLayout from "@/components/layout/PageLayout";
import FindTextField from "@/modules/find/components/FindTextField";
import Typography from "@mui/material/Typography";

export default function FindPage() {
  return (
    <PageLayout className="h-full justify-around">
      <div className="flex flex-col gap-12">
        <Typography variant="h6">찾으시는 지역을 알려주세요!</Typography>
        <FindTextField />
      </div>
      <Button>알아보러 가기</Button>
    </PageLayout>
  );
}
