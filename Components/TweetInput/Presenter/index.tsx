import Avatar from "@mui/material/Avatar";

import { Wrapper } from "../styles/tweetInput.styles";

const TweetInput = ({
  tweetText,
  setTweetVisibility,
  shortForm,
  textAreaOnChange,
  calculateRows,
}) => {
  return (
    <>
      <Wrapper>
        <div>
          <Avatar sx={{ bgcolor: "violet", width: 56, height: 56 }}>
            <div className="avatarText">{shortForm}</div>
          </Avatar>
        </div>
        <div>
          <textarea
            placeholder={tweetText === "" ? "What's happening?" : ""}
            className="textArea font font-m"
            cols={45}
            value={tweetText}
            rows={calculateRows}
            onChange={textAreaOnChange}
            onClick={() => setTweetVisibility(true)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                console.log(this);
              }
            }}
          />
        </div>
      </Wrapper>
    </>
  );
};
export default TweetInput;
