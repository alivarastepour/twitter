import Avatar from "@mui/material/Avatar";
import CustomTextBox from "../../CustomTextBox/CustomTextBox";

import { TtweetInput } from "../Handlers/TtweetInput";

import { Wrapper } from "../styles/tweetInput.styles";

const TweetInput = ({
  tweetText,
  setTweetVisibility,
  shortForm,
  textAreaOnChange,
  calculateRows,
  setTweetText,
}) => (
  <>
    <Wrapper>
      <div>
        <Avatar sx={{ bgcolor: "violet", width: 56, height: 56 }}>
          <div className="avatarText">{shortForm}</div>
        </Avatar>
      </div>
      <div>
        <CustomTextBox
          onChange={textAreaOnChange}
          onClick={setTweetVisibility}
          setTweetText={setTweetText}
        />
      </div>
    </Wrapper>
  </>
);

export default TweetInput;
