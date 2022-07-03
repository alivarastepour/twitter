import {useState} from "react";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Tooltip from "@mui/material/Tooltip";

import {Wrapper} from "./tweetDisplay.styles";
import ProfileDialog from "../ProfileDialog";

const TweetDisplay = ({tweet, avatarURL, name, username, time, bio}) => {
    const [hoverEffect, setHoverEffect] = useState('');

    const calculateTimeDifference = (): string => {
        const now: Date = new Date();
        const then: Date = new Date(time);
        const difference: number = (now.getTime() - then.getTime()) / 1000;
        const yearDifference: number = difference / (60 * 60 * 24 * 365);
        const dayDifference: number = difference / (60 * 60 * 24);
        const hourDifference: number = difference / (60 * 60);
        const minuteDifference: number = difference / (60);
        if (yearDifference > 1) {
            return Math.floor(yearDifference) + 'y';
        } else if (dayDifference > 1) {
            return Math.floor(dayDifference) + 'd';
        } else if (hourDifference > 1) {
            return Math.floor(hourDifference) + 'h';
        } else if (minuteDifference > 1) {
            return Math.floor(minuteDifference) + 'm';
        } else if (difference < 60) {
            return Math.floor(difference) + 's'
        }
    }

    return <>
        <Wrapper>
            <div className="tweetHeader">
                <div>
                    <Avatar sx={{width: 48, height: 48}} src='/sample.jpg'/>
                </div>
                <div className='ownerContent'>
                    <span className='tweetOwnerName font font-b'><ProfileDialog name={name} userName={username}
                                                                                avatarURL={avatarURL} bio={bio}/></span>
                    <span className='tweetOwnerUsername font font-m'>{'@' + username}</span>
                    <span> . </span>
                    <Tooltip title={<div style={{fontSize: '0.8rem'}} className='font font-m'>{time}</div>}>
                        <span className='tweetTime font font-m'>{calculateTimeDifference()}</span>
                    </Tooltip>
                </div>
            </div>
            <div className='tweetContent font font-m'>
                {tweet.split(' ').map(a => {
                    if (a.startsWith('#'))
                        return <span key={a} className='hashtag'>{a + " "}</span>
                    return <span key={a}>{a + " "}</span>
                })}
            </div>
            <div className="tweetFooter">
                <div className="tweetAction comment" onMouseEnter={() => setHoverEffect('comment')}
                     onMouseLeave={() => setHoverEffect('')}>
                    <div className="actionIcon">
                        <IconButton>
                            <ModeCommentOutlinedIcon sx={hoverEffect === 'comment' && {color: 'rgb(29, 155, 240)'}}/>
                        </IconButton>
                    </div>
                    <div className="actionText font font-m">100</div>
                </div>
                <div className="tweetAction retweet" onMouseEnter={() => setHoverEffect('retweet')}
                     onMouseLeave={() => setHoverEffect('')}>
                    <div className="actionIcon">
                        <IconButton>
                            <RepeatOutlinedIcon sx={hoverEffect === 'retweet' && {color: 'rgb(0, 186, 124)'}}/>
                        </IconButton>
                    </div>
                    <div className="actionText font font-m">213</div>
                </div>
                <div className="tweetAction like" onMouseEnter={() => setHoverEffect('like')}
                     onMouseLeave={() => setHoverEffect('')}>
                    <div className="actionIcon">
                        <IconButton>
                            <FavoriteBorderOutlinedIcon sx={hoverEffect === 'like' && {color: 'rgb(249, 24, 128)'}}/>
                        </IconButton>
                    </div>
                    <div className="actionText font font-m">31</div>
                </div>
                <div className="tweetAction" onMouseEnter={() => setHoverEffect('share')}
                     onMouseLeave={() => setHoverEffect('')}>
                    <div className="actionIcon">
                        <IconButton>
                            <FileUploadOutlinedIcon sx={hoverEffect === 'share' && {color: 'rgb(29, 155, 240)'}}/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </Wrapper>
    </>
}
export default TweetDisplay;