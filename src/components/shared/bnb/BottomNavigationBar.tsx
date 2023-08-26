import EditNoteIcon from "@mui/icons-material/EditNote";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useMemo, useState } from "react";

type BnbPath = "/" | "/market/form" | "/my-market";
export default function BottomNavigationBar() {
  const [value, setValue] = useState(0);

  const list: { path: BnbPath; label: string }[] = useMemo(
    () => [
      { path: "/", label: "홈" },
      { path: "/market/form", label: "현장등록" },
      { path: "/my-market", label: "나의현장" },
    ],
    []
  );

  const { push, pathname } = useRouter();

  useEffect(() => {
    const currentPathIndex = list.findIndex((route) => route.path === pathname);
    setValue(currentPathIndex !== -1 ? currentPathIndex : 0);
  }, [pathname, list]);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    push(list[newValue].path);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full border-t-1 border-solid border-gray py-5 bg-white">
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        {list.map((item, index) => {
          let icon;

          if (item.path === "/") {
            icon = <HomeIcon />;
          } else if (item.path === "/market/form") {
            icon = <EditNoteIcon />;
          } else {
            icon = <PersonIcon />;
          }

          return (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              value={index}
              icon={icon}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
}
