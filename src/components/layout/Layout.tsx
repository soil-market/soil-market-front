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

  return (
    <div className={"max-w-xl h-full mx-auto relative"}>
      {children}
      {!withoutBnbPages.includes(pathname) && <BottomNavigationBar />}
    </div>
  );
}
