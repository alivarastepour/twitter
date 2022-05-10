import {iconButtonStyles, iconStyles, Wrapper} from './tweetUtils.styles'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import {CircularProgress, IconButton} from "@mui/material";
import styles from '../../styles/Button/button.module.scss'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {useState} from "react";
import Divider from "../Divider";

const TweetUtils = ({tweetText}) => {
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
                {tweetText.length !== 0 && <div className='hiddenSection'>
                    <div className='progressbar'>
                        <CircularProgress size={'1.5rem'} variant='determinate' value={(100 * tweetText.length) / 280}
                                          sx={{color: 'rgb(29, 155, 240)'}}/>
                    </div>
                    <div className='dividerContainer'>
                        <Divider orientation='vertical' text='' width={{}} height={30}/>
                    </div>
                    <div>
                        <IconButton>
                            <AddCircleOutlineRoundedIcon
                                sx={{color: 'rgb(29, 155, 240)', width: '1.8rem', height: '1.8rem'}}/>
                        </IconButton>
                    </div>
                </div>}
                <div>
                    <button
                        className={styles.blueButton + " tweetButton font" + `${0 !== tweetText.length ? ` tweetButtonActive` : ` tweetButtonDisable`}`}
                        disabled={0 === tweetText.length}>Tweet
                    </button>
                </div>

            </div>
        </Wrapper>
    </>
}
export default TweetUtils;