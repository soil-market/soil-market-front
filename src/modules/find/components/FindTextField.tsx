import TextField from "@/components/design/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextFieldProps } from "@mui/material";

export default function FindTextField(props: TextFieldProps) {
  return (
    <>
      <TextField
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </>
  );
}
