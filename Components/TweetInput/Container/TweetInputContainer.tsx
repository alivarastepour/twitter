import { ChangeEvent } from "react";

import TweetInput from "../Presenter";

import { TtweetInputFields } from "../Handlers/TtweetInputFields";

import {
  calculateRows,
  createShortForm,
  textAreaOnChange,
  textAreaOnChangeDecorator,
} from "../Handlers/tweetInputHandlers";

const TweetInputContainer = ({
  who,
  tweetText,
  setTweetText,
  setTweetVisibility,
}: TtweetInputFields) => (
  <TweetInput
    calculateRows={calculateRows(tweetText)}
    textAreaOnChange={textAreaOnChangeDecorator}
    shortForm={createShortForm(who)}
    tweetText={tweetText}
    setTweetVisibility={setTweetVisibility}
    setTweetText={setTweetText}
  />
);

export default TweetInputContainer;
