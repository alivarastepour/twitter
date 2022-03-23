import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as NativeSelect,
} from "@mui/material";

const Select = ({ label, items, width, value, setValue }) => {
  const labelID = `${label}-label`;
  return (
    <FormControl sx={{ width: width }}>
      <InputLabel id={labelID}>{label}</InputLabel>
      <NativeSelect
        value={value}
        onChange={(e) => setValue(e.target.value)}
        labelId={labelID}
        MenuProps={{
          PaperProps: { sx: { maxHeight: 500 } },
        }}
      >
        {items.map((item) => {
          return (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};
export default Select;
