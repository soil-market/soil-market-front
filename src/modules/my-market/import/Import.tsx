import Typography from "@mui/material/Typography";
import ImportList from "./ImportList";

export default function Import() {
  return (
    <div>
      <Typography
        className="px-20 border-b-1 border-solid border-gray pb-10"
        variant="subtitle1"
      >
        토사 받는 현장
      </Typography>
      <ImportList />
    </div>
  );
}
