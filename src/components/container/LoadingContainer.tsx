import useLoadingRecoil from "@/recoil/useLoading.recoil";
import { Backdrop, CircularProgress } from "@mui/material";
import { PropsWithChildren } from "react";

export default function LoadingContainer({ children }: PropsWithChildren) {
  const { isLoading } = useLoadingRecoil();

  return (
    <>
      {children}
      <Backdrop open={isLoading}>
        <CircularProgress />
      </Backdrop>
    </>
  );
}
