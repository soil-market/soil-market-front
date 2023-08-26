import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import BottomNavigationBar from "../shared/bnb/BottomNavigationBar";

export default function Layout({ children }: PropsWithChildren) {
  const withoutBnbPages = [
    "/landing",
    "/phone-verification",
    "sign-up",
    "/find",
  ];

  const { pathname } = useRouter();

  const isWithoutBnbPages = withoutBnbPages.includes(pathname);

  return (
    <>
      <div
        className={"max-w-xl overflow-auto mx-auto relative"}
        style={{ height: isWithoutBnbPages ? "100vh" : "calc(100vh - 67px)" }}
      >
        {children}
      </div>
      {!isWithoutBnbPages && <BottomNavigationBar />}
    </>
  );
}
