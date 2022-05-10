import NativeDivider from "@mui/material/Divider";

const Divider = ({text, width, height, orientation}) => (
    <>
        <NativeDivider sx={{width, height}} orientation={orientation}>
            {text !== '' && <div className="font font-m">{text}</div>}
        </NativeDivider>
    </>
);
export default Divider;
