import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

import {Wrapper, Content} from '../styles/tweetInput.styles'

const TweetInput = ({tweetText, setTweetVisibility, shortForm, textAreaOnChange, calculateRows}) => {
    return <>
        <Content>
            <div className='font font-eb home'>
                Home
            </div>
            <div>
                <IconButton>
                    <AutoAwesomeOutlinedIcon/>
                </IconButton>
            </div>
        </Content>
        <Wrapper>
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
                        rows={calculateRows}
                        onChange={textAreaOnChange}
                        onClick={() => setTweetVisibility(true)}
                    />
            </div>
        </Wrapper>
    </>
}
export default TweetInput;