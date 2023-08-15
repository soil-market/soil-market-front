import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div className={"max-w-xl h-full mx-auto relative"}>{children}</div>;
}
