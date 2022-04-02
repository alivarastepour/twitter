import NativeDivider from "@mui/material/Divider";

const Divider = ({ text, width, orientation }) => (
  <>
    <NativeDivider sx={{ width }} orientation={orientation}>
      <div className="font font-m">{text}</div>
    </NativeDivider>
  </>
);
export default Divider;
