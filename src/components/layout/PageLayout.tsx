import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type PageLayoutProps = {
  className?: string;
} & PropsWithChildren;

/**
 * p-20 flex flex-col
 */
export default function PageLayout({ className, children }: PageLayoutProps) {
  return (
    <div className={twMerge("p-20 flex flex-col", className)}>{children}</div>
  );
}
