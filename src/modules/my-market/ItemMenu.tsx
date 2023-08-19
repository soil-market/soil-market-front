import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function ItemMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemList = [
    { text: "거래완료", onClick: handleClose },
    { text: "게시글 수정", onClick: handleClose },
    { text: "삭제", onClick: handleClose },
  ];

  return (
    <>
      <div
        id="itme-button"
        className="absolute top-[5px] right-[5px] border-solid border-1 border-gray flex items-center h-18 rounded-5"
        aria-controls={open ? "item-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </div>

      <Menu
        id="item-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "item-button",
        }}
      >
        {menuItemList.map((menuItem) => (
          <MenuItem
            key={menuItem.text}
            onClick={() => {
              menuItem.onClick();
            }}
          >
            {menuItem.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
