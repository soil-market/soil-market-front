import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ProcessKey } from "./type";
import useProcessIndex from "./useProcessIndex";

type ProcessHederProps = {
  processName: ProcessKey;
};
export default function ProcessHeder({ processName }: ProcessHederProps) {
  const { prev } = useProcessIndex(processName);

  return (
    <div className="fixed top-0 left-0 bg-white w-full h-40 flex items-center justify-start pl-4">
      <ArrowBackIcon onClick={prev}>뒤로 가기</ArrowBackIcon>
    </div>
  );
}
