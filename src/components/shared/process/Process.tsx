import { Children, PropsWithChildren } from "react";
import ProcessHeder from "./ProcessHeder";
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

  const { index } = useProcessIndex(processName);

  const finalClassName = className ? className + " pt-40" : "pt-40";

  return (
    <div className={finalClassName}>
      {index !== 0 && <ProcessHeder processName={processName} />}

      {childrenList[index]}
    </div>
  );
}
