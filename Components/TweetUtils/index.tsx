import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Tooltip } from "@mui/material";

import Divider from "../Divider";
import { postTweet } from "./tweetUtilHandler";

import { iconButtonStyles, iconStyles, Wrapper } from "./tweetUtils.styles";

import styles from "../../styles/Button/button.module.scss";

const TweetUtils = ({ tweetText, setTweetText }) => (
  <>
    <Wrapper>
      <div className="additional">
        <div>
          <IconButton sx={iconButtonStyles}>
            <Tooltip title="Media">
              <InsertPhotoOutlinedIcon sx={iconStyles} />
            </Tooltip>
          </IconButton>
        </div>
        <div>
          <IconButton sx={iconButtonStyles}>
            <Tooltip title="Gif">
              <GifBoxOutlinedIcon sx={iconStyles} />
            </Tooltip>
          </IconButton>
        </div>
        <div>
          <IconButton sx={iconButtonStyles}>
            <Tooltip title="Poll">
              <PollOutlinedIcon sx={iconStyles} />
            </Tooltip>
          </IconButton>
        </div>
        <div>
          <IconButton sx={iconButtonStyles}>
            <Tooltip title="Emoji">
              <SentimentSatisfiedOutlinedIcon sx={iconStyles} />
            </Tooltip>
          </IconButton>
        </div>
        <div>
          <IconButton sx={iconButtonStyles}>
            <Tooltip title="Schedule">
              <EventNoteOutlinedIcon sx={iconStyles} />
            </Tooltip>
          </IconButton>
        </div>
        <div>
          <IconButton sx={iconButtonStyles}>
            <Tooltip title="Location">
              <FmdGoodOutlinedIcon sx={iconStyles} />
            </Tooltip>
          </IconButton>
        </div>
      </div>
      <div className="tweetButtonContainer">
        {tweetText.length !== 0 && (
          <div className="hiddenSection">
            <div className="progressbar">
              <CircularProgress
                size={"1.5rem"}
                variant="determinate"
                value={
                  tweetText.length <= 280 ? (100 * tweetText.length) / 280 : 100
                }
                sx={{
                  color: `${
                    tweetText.length <= 260
                      ? "rgb(29, 155, 240)"
                      : tweetText.length < 280
                      ? "rgb(222, 190, 62)"
                      : "red"
                  }`,
                }}
              />
            </div>
            <div className="dividerContainer">
              <Divider orientation="vertical" text="" width={-1} height={30} />
            </div>
            <div>
              <IconButton>
                <AddCircleOutlineRoundedIcon
                  sx={{
                    color: "rgb(29, 155, 240)",
                    width: "1.8rem",
                    height: "1.8rem",
                  }}
                />
              </IconButton>
            </div>
          </div>
        )}
        <div>
          <button
            className={styles.blueButton + " tweetButton font"}
            disabled={0 === tweetText.length || 280 <= tweetText.length}
            onClick={() => {
              setTweetText("");
              postTweet(tweetText);
            }}
          >
            Tweet
          </button>
        </div>
      </div>
    </Wrapper>
  </>
);

export default TweetUtils;
