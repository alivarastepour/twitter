import IconButton from "@mui/material/IconButton";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

import { TglobalHeader } from "./Handlers/TglobalHeader";

import { Content } from "./globalHeader.styles";

const GlobalHeader = ({ content }: TglobalHeader) => (
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

export default GlobalHeader;
