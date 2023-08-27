import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

type HeaderProps = {
  text: string;
  // pathname
  beforePage?: string;
};
export default function Header({ text, beforePage }: HeaderProps) {
  const { push, back } = useRouter();

  const goBack = () => {
    if (beforePage) {
      push(beforePage);
    } else {
      back();
    }
  };

  return (
    <div className="fixed top-0 left-0 h-60 flex justify-start gap-12 items-center w-full bg-white z-10">
      <ArrowBackIcon
        className="absolute top-[17px] left-[15px]"
        onClick={goBack}
      >
        뒤로 가기
      </ArrowBackIcon>
      <div className="flex flex-1 justify-center">
        <Typography variant="h6">{text}</Typography>
      </div>
    </div>
  );
}
