import {useState} from "react";

import TweetVisibility from "../TweetVisibility";
import TweetInputContainer from "../TweetInput/Container/TweetInputContainer";
import TweetUtils from "../TweetUtils";

import {Wrapper} from './tweet.styles'
import Divider from "../Divider";

const Tweet = ({who, isModal}) => {

    const [tweetVisibility, setTweetVisibility] = useState(false);

    const [tweetText, setTweetText] = useState('');

    return <>
        <Wrapper>
            <div>
                <TweetInputContainer who={who}
                                     tweetText={tweetText}
                                     setTweetText={setTweetText}
                                     setTweetVisibility={setTweetVisibility}
                                     isModal={isModal}
                />
            </div>
            <div className={isModal && 'tw-container'}>
                <TweetVisibility show={isModal || tweetVisibility}/>
            </div>
            {
                isModal && (
                    <div className='t-divider-container'>
                        <Divider text={''} height={''} width={''} orientation={''}/>
                    </div>
                )
            }
            <div>
                <TweetUtils tweetText={tweetText} setTweetText={setTweetText}/>
            </div>
        </Wrapper>
    </>
}
export default Tweet;