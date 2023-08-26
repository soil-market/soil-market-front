import Button from "@/components/design/Button";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function MarketSelect() {
  return (
    <div className="px-20 flex flex-col pt-[20vh] gap-60 h-full">
      <Typography variant="h6">현장의 현재 상태를 선택해주세요.</Typography>

      <div className="flex flex-col gap-20">
        <Button>
          <Link href={"/market/form/export"}>토사 나와요</Link>
        </Button>
        <Button>
          <Link href={"/market/form/import"}>토사 받아요</Link>
        </Button>
      </div>
    </div>
  );
}
