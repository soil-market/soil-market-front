import Typography from "@mui/material/Typography";
import ImportList from "./ImportList";

export default function Import() {
  return (
    <div className="flex flex-col gap-12">
      <Typography variant="subtitle1">토사 받는 현장</Typography>
      <ImportList />
    </div>
  );
}
