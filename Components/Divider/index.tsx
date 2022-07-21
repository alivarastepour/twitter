import NativeDivider from "@mui/material/Divider";
import { Tdivider } from "./Handlers/Tdivider";

const Divider = ({ text, width, height, orientation }: Tdivider) => (
  <>
    <NativeDivider sx={{ width, height }} orientation={orientation}>
      {text !== "" && <div className="font font-m">{text}</div>}
    </NativeDivider>
  </>
);
export default Divider;
