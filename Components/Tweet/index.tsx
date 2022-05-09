import {Avatar} from "@mui/material";
import {Wrapper} from './tweet.styles'
import {useState} from "react";
import TweetVisibility from "../TweetVisibility";
import TweetInput from "../TweetInput";

const Tweet = ({who}) => {
    const [tweetVisibility, setTweetVisibility] = useState(false);
    const [tweetText, setTweetText] = useState('');
    return <>
        <Wrapper>
            <div>
                <TweetInput
                    who={who}
                    tweetText={tweetText}
                    setTweetText={setTweetText}
                    setTweetVisibility={setTweetVisibility}
                />
            </div>
            <div>
                <TweetVisibility show={tweetVisibility}/>
            </div>
            <div>
                salam
            </div>
        </Wrapper>
    </>
}
export default Tweet;