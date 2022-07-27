import { ChangeEvent } from "react";

import TweetInput from "../Presenter";

import { TtweetInputFields } from "../Handlers/TtweetInputFields";

import {
  calculateRows,
  createShortForm,
  textAreaOnChange,
} from "../Handlers/tweetInputHandlers";

const TweetInputContainer = ({
  who,
  tweetText,
  setTweetText,
  setTweetVisibility,
}: TtweetInputFields) => (
  <TweetInput
    calculateRows={calculateRows(tweetText)}
    textAreaOnChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
      textAreaOnChange(e, setTweetText)
    }
    shortForm={createShortForm(who)}
    tweetText={tweetText}
    setTweetVisibility={setTweetVisibility}
  />
);

export default TweetInputContainer;
