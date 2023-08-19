import { Typography } from "@mui/material";
import ExportList from "./ExportList";

export default function Export() {
  return (
    <div>
      <Typography
        className="px-20 border-b-1 border-solid border-gray pb-10"
        variant="subtitle1"
      >
        토사 나오는 현장
      </Typography>
      <ExportList />
    </div>
  );
}
