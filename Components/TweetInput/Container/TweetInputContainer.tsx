import TweetInput from "../Presenter";

import {TtweetInputFields} from "../Handlers/TtweetInputFields";

import {calculateRows, createShortForm, textAreaOnChange} from "../Handlers/tweetInputHandlers";

const TweetInputContainer = ({who, tweetText, setTweetText, setTweetVisibility, isModal}: TtweetInputFields) => {

    return <TweetInput
        isModal={isModal}
        calculateRows={calculateRows(tweetText)}
        textAreaOnChange={e => textAreaOnChange(e, setTweetText)}
        shortForm={createShortForm(who)}
        tweetText={tweetText}
        setTweetVisibility={setTweetVisibility}
    />
}
export default TweetInputContainer;