import { Typography } from "@mui/material";

type FindOption = {
  roadAddress: string;
  jibunAddress: string;
  onClick: () => void;
};
export default function FindOption({
  roadAddress,
  jibunAddress,
  onClick,
}: FindOption) {
  return (
    <div
      onClick={onClick}
      className="p-10 border-b-1 border-solid border-gray last:border-b-0 flex flex-col gap-12"
    >
      <Typography variant="subtitle1">{roadAddress}</Typography>
      <Typography variant="subtitle2">{jibunAddress}</Typography>
    </div>
  );
}
