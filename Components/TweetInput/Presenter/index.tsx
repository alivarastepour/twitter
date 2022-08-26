import Avatar from "@mui/material/Avatar";
import CustomTextBox from "../../CustomTextBox/CustomTextBox";
import { TtweetInput } from "../Handlers/TtweetInput";

import { Wrapper } from "../styles/tweetInput.styles";

const TweetInput = ({
  shortForm,
  textAreaOnChange,
  setTweetText,
  setTweetVisibility,
}: TtweetInput) => (
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
          setTweetText={setTweetText}
          onClick={setTweetVisibility}
        />
      </div>
    </Wrapper>
  </>
);

export default TweetInput;
