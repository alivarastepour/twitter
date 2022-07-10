import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

import {Wrapper, Content} from '../styles/tweetInput.styles'

const TweetInput = ({tweetText, setTweetVisibility, shortForm, textAreaOnChange, calculateRows, isModal}) => {
    return <>
        {isModal || <Content>
            <div className='salam'>
                <div className='font font-eb home'>
                    Home
                </div>
                <div className='favIc'>
                    <IconButton>
                        <AutoAwesomeOutlinedIcon/>
                    </IconButton>
                </div>
            </div>
        </Content>}
        <Wrapper>
            <div>
                <Avatar sx={{bgcolor: 'violet', width: 56, height: 56}}>
                    <div className='avatarText'>
                        {shortForm}
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
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                console.log(this)
                            }
                        }
                        }

                    />
            </div>
        </Wrapper>
    </>
}
export default TweetInput;