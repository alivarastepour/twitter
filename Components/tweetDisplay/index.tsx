import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Tooltip from "@mui/material/Tooltip";

import ProfileDialog from "../ProfileDialog";

import { calculateTimeDifference } from "./Handlers/tweetDisplayHandlers";
import { createShortForm } from "../TweetInput/Handlers/tweetInputHandlers";
import { TtweetDisplay } from "./Handlers/TtweetDisplay";

import { Wrapper } from "./tweetDisplay.styles";

const TweetDisplay = ({
  tweet,
  avatarURL,
  name,
  username,
  time,
  bio,
}: TtweetDisplay) => {
  const [hoverEffect, setHoverEffect] = useState("");

  return (
    <>
      <Wrapper>
        <div className="tweetHeader">
          <div>
            <Avatar
              sx={{ width: 48, height: 48, bgcolor: "violet" }}
              src={avatarURL ?? ""}
            >
              {avatarURL ? "" : createShortForm(name)}
            </Avatar>
          </div>
          <div className="ownerContent">
            <span className="tweetOwnerName font font-b">
              <ProfileDialog
                name={name}
                userName={username}
                avatarURL={avatarURL}
                biography={bio}
              />
            </span>
            <span className="tweetOwnerUsername font font-m">
              {"@" + username}
            </span>
            <span> . </span>
            <Tooltip
              title={
                <div style={{ fontSize: "0.8rem" }} className="font font-m">
                  {time}
                </div>
              }
            >
              <span className="tweetTime font font-m">
                {calculateTimeDifference(time)}
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="tweetContent font font-m" id="tweetContent">
          {tweet.split("\n").map((line) => {
            return (
              <div key={line}>
                {line.split(" ").map((word) => {
                  return (
                    <span
                      key={word}
                      className={word.startsWith("#") ? "hashtag" : ""}
                    >
                      {word + " "}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="tweetFooter">
          <div
            className="tweetAction comment"
            onMouseEnter={() => setHoverEffect("comment")}
            onMouseLeave={() => setHoverEffect("")}
          >
            <div className="actionIcon">
              <IconButton>
                <ModeCommentOutlinedIcon
                  sx={
                    hoverEffect === "comment" && { color: "rgb(29, 155, 240)" }
                  }
                />
              </IconButton>
            </div>
            <div className="actionText font font-m">100</div>
          </div>
          <div
            className="tweetAction retweet"
            onMouseEnter={() => setHoverEffect("retweet")}
            onMouseLeave={() => setHoverEffect("")}
          >
            <div className="actionIcon">
              <IconButton>
                <RepeatOutlinedIcon
                  sx={
                    hoverEffect === "retweet" && { color: "rgb(0, 186, 124)" }
                  }
                />
              </IconButton>
            </div>
            <div className="actionText font font-m">213</div>
          </div>
          <div
            className="tweetAction like"
            onMouseEnter={() => setHoverEffect("like")}
            onMouseLeave={() => setHoverEffect("")}
          >
            <div className="actionIcon">
              <IconButton>
                <FavoriteBorderOutlinedIcon
                  sx={hoverEffect === "like" && { color: "rgb(249, 24, 128)" }}
                />
              </IconButton>
            </div>
            <div className="actionText font font-m">31</div>
          </div>
          <div
            className="tweetAction"
            onMouseEnter={() => setHoverEffect("share")}
            onMouseLeave={() => setHoverEffect("")}
          >
            <div className="actionIcon">
              <IconButton>
                <FileUploadOutlinedIcon
                  sx={hoverEffect === "share" && { color: "rgb(29, 155, 240)" }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default TweetDisplay;
