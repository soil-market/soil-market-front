import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function CompanyInformationTagList() {
  const list = [
    { label: "건설업체", value: "건설업체" },
    { label: "골재업체", value: "골재업체" },
    { label: "운송업체", value: "운송업체" },
    { label: "개인", value: "개인" },
  ];

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {list.map((item) => (
          <FormControlLabel
            key={item.label}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
