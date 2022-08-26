import TweetInput from "../Presenter";

import {
  createShortForm,
  textAreaOnChange,
} from "../Handlers/tweetInputHandlers";
import { TtweetInputFields } from "../Handlers/TtweetInputFields";

const TweetInputContainer = ({
  who,
  setTweetText,
  setTweetVisibility,
}: TtweetInputFields) => (
  <TweetInput
    textAreaOnChange={textAreaOnChange}
    shortForm={createShortForm(who)}
    setTweetVisibility={setTweetVisibility}
    setTweetText={setTweetText}
  />
);

export default TweetInputContainer;
