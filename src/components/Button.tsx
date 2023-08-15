import { ButtonProps, Button as MuiButton } from "@mui/material";

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <MuiButton
      style={{ padding: "10px 15px" }}
      variant={props.variant || "outlined"}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
