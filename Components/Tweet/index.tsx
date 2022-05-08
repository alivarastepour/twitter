import {Avatar} from "@mui/material";
import {Wrapper} from './tweet.styles'
import {useState} from "react";
import TweetVisibility from "../TweetVisibility";

const Tweet = ({who}) => {
    const [tweetVisibility, setTweetVisibility] = useState(false);
    const [tweetText, setTweetText] = useState('');
    let shortForm: string;
    let separated: string[] = who.split(' ');
    if (separated.length > 1)
        shortForm = who.split(' ')[0][0] + who.split(' ')[1][0]
    else
        shortForm = who[0]

    const calculateRows = () => {
        const value = Math.ceil(tweetText.length / 51);
        if (value !== 0)
            return value;
        return 1
    }
    const textAreaOnChange = (e) => {
        if (e.target.value.length == 280)
            e.preventDefault();
        else
            setTweetText(e.target.value)
    }
    return <>
        <Wrapper>
            <div className='tweetInput'>
                <div>
                    <Avatar sx={{bgcolor: 'violet', width: 56, height: 56}}>
                        <div className='avatarText'>
                            {shortForm.toUpperCase()}
                        </div>
                    </Avatar>
                </div>
                <div>
                    <textarea
                        placeholder={tweetText === '' ? 'What\'s happening?' : ''}
                        className='textArea font font-m'
                        cols={45}
                        value={tweetText}
                        rows={calculateRows()}
                        onChange={textAreaOnChange}
                        onClick={() => setTweetVisibility(true)}
                    />
                </div>
            </div>
            <TweetVisibility show={tweetVisibility}/>
        </Wrapper>
    </>
}
export default Tweet;