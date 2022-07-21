import IconButton from "@mui/material/IconButton";
import { Content } from "./globalHeader.styles";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

const GlobalHeader = ({ content }) => {
  return (
    <Content>
      <div className="container">
        <div className="font font-eb home">{content}</div>
        <div className="favIc">
          <IconButton>
            <AutoAwesomeOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </Content>
  );
};
export default GlobalHeader;
