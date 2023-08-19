import { Typography } from "@mui/material";
import ItemMenu from "../ItemMenu";
import { ImportItem } from "./type";

export default function ImportListItem({ name, amount, location }: ImportItem) {
  return (
    <li className="flex flex-col border-1 border-solid border-gray py-12 pl-12 pr-60 rounded-10 relative">
      <div className="flex justify-between">
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="subtitle1">{amount}m³</Typography>
      </div>
      <Typography variant="subtitle1">{location}</Typography>
      <ItemMenu />
    </li>
  );
}
