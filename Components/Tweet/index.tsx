import { useState } from "react";

import TweetVisibility from "../TweetVisibility";
import TweetInputContainer from "../TweetInput/Container/TweetInputContainer";
import TweetUtils from "../TweetUtils";
import Divider from "../Divider";

import { Wrapper } from "./tweet.styles";

import { TtweetProps } from "./Handlers/TtweetProps";

const Tweet = ({ who, isModal }: TtweetProps) => {
  const [tweetVisibility, setTweetVisibility] = useState(false);

  const [tweetText, setTweetText] = useState("");

  return (
    <>
      <Wrapper>
        <div>
          <TweetInputContainer
            who={who}
            tweetText={tweetText}
            setTweetText={setTweetText}
            setTweetVisibility={setTweetVisibility}
          />
        </div>
        <div className={isModal && "tw-container"}>
          <TweetVisibility show={isModal || tweetVisibility} />
        </div>
        {isModal && (
          <div className="t-divider-container">
            <Divider
              text=""
              height={-1}
              width={100}
              orientation={"horizontal"}
            />
          </div>
        )}
        <div>
          <TweetUtils tweetText={tweetText} setTweetText={setTweetText} />
        </div>
      </Wrapper>
    </>
  );
};
export default Tweet;
