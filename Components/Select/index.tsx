import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/Select";

import { Tselect } from "./Handlers/Tselect";

const Select = ({ label, items, width, value, setValue }: Tselect) => {
  const labelID = `${label}-label`;

  return (
    <FormControl sx={{ width: width }}>
      <InputLabel id={labelID}>{label}</InputLabel>
      <NativeSelect
        value={value || ""}
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
