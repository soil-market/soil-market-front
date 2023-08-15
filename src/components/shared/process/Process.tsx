import { Button } from "@mui/material";
import { Children, PropsWithChildren } from "react";
import { ProcessKey } from "./type";
import useProcessIndex from "./useProcessIndex";

type ProcessProps = {
  processName: ProcessKey;
  className?: string;
};
export default function Process({
  processName,
  children,
  className,
}: ProcessProps & PropsWithChildren) {
  const childrenList = Children.toArray(children);

  const { index, prev } = useProcessIndex(processName);

  return (
    <div className={className || ""}>
      {index !== 0 && <Button onClick={prev}>뒤로 가기</Button>}

      {childrenList[index]}
    </div>
  );
}
