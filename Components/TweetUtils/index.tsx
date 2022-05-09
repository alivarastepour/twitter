import {iconButtonStyles, iconStyles, Wrapper} from './tweetUtils.styles'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import {IconButton} from "@mui/material";
import styles from '../../styles/Button/button.module.scss'
const TweetUtils = () => {


    return <>
        <Wrapper>
            <div className='additional'>
                <div>
                    <IconButton sx={iconButtonStyles}>
                        <InsertPhotoOutlinedIcon sx={iconStyles}/>
                    </IconButton>
                </div>
                <div>
                    <IconButton sx={iconButtonStyles}>
                        <GifBoxOutlinedIcon sx={iconStyles}/>
                    </IconButton>
                </div>
                <div>
                    <IconButton sx={iconButtonStyles}>
                        <PollOutlinedIcon sx={iconStyles}/>
                    </IconButton>
                </div>
                <div>
                    <IconButton sx={iconButtonStyles}>
                        <SentimentSatisfiedOutlinedIcon sx={iconStyles}/>
                    </IconButton>
                </div>
                <div>
                    <IconButton sx={iconButtonStyles}>
                        <EventNoteOutlinedIcon sx={iconStyles}/>
                    </IconButton>
                </div>
                <div>
                    <IconButton sx={iconButtonStyles}>
                        <FmdGoodOutlinedIcon sx={iconStyles}/>
                    </IconButton>
                </div>
            </div>
            <div className='tweetButtonContainer'>
                <button className={styles.blueButton + " tweetButton font"}>Tweet</button>
            </div>
        </Wrapper>
    </>
}
export default TweetUtils;