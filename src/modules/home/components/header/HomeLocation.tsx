import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function HomeLocation() {
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <div className="flex" onClick={onClick}>
      <Typography variant="h6">위치설정</Typography>
      <PlayArrowIcon
        className="transition-all w-content h-content mt-3"
        style={{ transform: click ? "rotate(-90deg)" : "rotate(90deg)" }}
      />
    </div>
  );
}
