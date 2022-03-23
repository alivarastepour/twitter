import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/Select";

type TselectProps = {
  label: string;
  items: number[] | string[];
  width: number;
  value: number | string;
  setValue: Function;
};

const Select = ({ label, items, width, value, setValue }: TselectProps) => {
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
