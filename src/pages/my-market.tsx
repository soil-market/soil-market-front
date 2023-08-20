import Button from "@/components/design/Button";
import Export from "@/modules/my-market/export/Export";
import Import from "@/modules/my-market/import/Import";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function MyMarket() {
  const name = "사용자 123";

  return (
    <div className="pt-20">
      <div className="flex justify-between items-center px-20 mb-30">
        <div>
          <Typography variant="h6" className="">
            {name}
          </Typography>
        </div>
        <div>
          <Button style={{ padding: "0 5px" }}>
            <Link href={"/profile"}>프로필보기</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="px-20">
          <Typography variant="h6">나의 토사현장</Typography>
        </div>

        <div className="flex flex-col gap-60">
          <Export />
          <Import />
        </div>
      </div>

      <div className="absolute bottom-[77px] right-[8px]">
        <Button>
          <Link href={"/feedback"}>앱에 의견남기기</Link>
        </Button>
      </div>
    </div>
  );
}
