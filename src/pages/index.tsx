import { Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>토사장터</title>
        <meta name="description" content="흙을 버리거나 받아보세요!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-20 h-full flex flex-col gap-12">
        <Typography variant="h5">토사장터</Typography>
        <Typography variant="body1">환영합니다!</Typography>
        <Typography variant="body1" style={{ wordBreak: "keep-all" }}>
          토사장터는 우리의 소중한 자원 중 하나인 토사에 대한 정보를 쉽고 빠르게
          등록하여 공유할 수 있는 토사 정보 플랫폼입니다.
        </Typography>
        <Typography variant="body1" style={{ wordBreak: "keep-all" }}>
          우리 주변에 토사가 필요한 곳과 내보내는 곳들의 정보를 지도를 통해 한
          눈에 알아보고 다른 사용자들과 토사를 나누고 거래해보세요!
        </Typography>
        <div className="flex w-full pt-20">
          <Typography className="w-1/2 text-center" variant="body1">
            주요기능
          </Typography>
          <ul className="w-1/2">
            <li className="list-decimal">
              <Typography variant="body1">전국 토사 정보 조회</Typography>
            </li>
            <li className="list-decimal">
              <Typography variant="body1">간편한 토사 정보 등록</Typography>
            </li>
            <li className="list-decimal">
              <Typography variant="body1">다양한 현장 관리</Typography>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
