import Button from "@/components/design/Button";
import { useRouter } from "next/router";

type GoToBtnProps = {
  x?: string;
  y?: string;
};
export default function GoToBtn({ x, y }: GoToBtnProps) {
  const { push } = useRouter();

  const onClick = () => {
    if (x && y) {
      push(`/?x=${x}&y=${y}`);
    }
  };

  return <Button onClick={onClick}>알아보러 가기</Button>;
}
