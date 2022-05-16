import {Wrapper} from "./tweetDisplay.styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import {useState} from "react";
import {Tooltip} from "@mui/material";

const TweetDisplay = () => {
    const [hoverEffect, setHoverEffect] = useState('');
    return <>
        <Wrapper>
            <div className="tweetHeader">
                <div>
                    <Avatar sx={{width: 48, height: 48}} src='/sample.jpg'/>
                </div>
                <div className='ownerContent'>
                    <span className='tweetOwnerName font font-b'>ali varaste pour</span>
                    <span className='tweetOwnerUsername font font-m'>@AliVarastePour</span>
                    <span> . </span>
                    <Tooltip title={<div style={{fontSize: '0.8rem'}} className='font font-m'>saturday august 12th,
                        2022</div>}>
                        <span className='tweetTime font font-m'>20h</span>
                    </Tooltip>
                </div>
            </div>
            <div className='tweetContent font font-m'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias consequatur corporis distinctio
                dolores doloribus hic labore minus numquam quaerat, quis repudiandae tenetur! Blanditiis culpa
                doloremque exercitationem minus vel, voluptatibus!
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