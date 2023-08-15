import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

export default function TextField(props: TextFieldProps) {
  return (
    <MuiTextField
      variant="standard"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
