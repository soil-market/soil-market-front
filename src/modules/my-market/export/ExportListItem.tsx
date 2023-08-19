import { Typography } from "@mui/material";
import Image from "next/image";
import ItemMenu from "../ItemMenu";
import { ExportItem } from "./type";

export default function ExportListItem({
  name,
  amount,
  location,
  imgUrl,
}: ExportItem) {
  return (
    <li className="flex gap-20 border-b-1 border-solid border-gray pl-20 py-12 pr-40 relative">
      <Image width={150} height={100} src={imgUrl} alt={""} />
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex justify-between">
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="subtitle1">{amount}m³</Typography>
        </div>
        <Typography variant="subtitle1">{location}</Typography>
      </div>

      <ItemMenu />
    </li>
  );
}
