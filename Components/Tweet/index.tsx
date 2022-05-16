import {useState} from "react";

import TweetVisibility from "../TweetVisibility";
import TweetInputContainer from "../TweetInput/Container/TweetInputContainer";
import TweetUtils from "../TweetUtils";

import {Wrapper} from './tweet.styles'

const Tweet = ({who}) => {

    const [tweetVisibility, setTweetVisibility] = useState(false);

    const [tweetText, setTweetText] = useState('');

    return <>
        <Wrapper>
            <div>
                <TweetInputContainer who={who}
                                     tweetText={tweetText}
                                     setTweetText={setTweetText}
                                     setTweetVisibility={setTweetVisibility}
                />
            </div>
            <div>
                <TweetVisibility show={tweetVisibility}/>
            </div>
            <div>
                <TweetUtils tweetText={tweetText}/>
            </div>
        </Wrapper>
    </>
}
export default Tweet;