import {Wrapper} from "./tweetDisplay.styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
const TweetDisplay = () => {
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
                    <span className='tweetTime font font-m'>20h</span>
                </div>
            </div>
            <div className='tweetContent font font-m'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias consequatur corporis distinctio dolores doloribus hic labore minus numquam quaerat, quis repudiandae tenetur! Blanditiis culpa doloremque exercitationem minus vel, voluptatibus!
            </div>
            <div className="tweetFooter">
                <div className="tweetAction">
                    <div className="actionIcon">
                        <IconButton>
                            <ModeCommentOutlinedIcon/>
                        </IconButton>
                    </div>
                    <div className="actionText">100</div>
                </div>
                <div className="tweetAction">
                    <div className="actionIcon">
                        <IconButton>
                            <RepeatOutlinedIcon/>
                        </IconButton>
                    </div>
                    <div className="actionText">213</div>
                </div>
                <div className="tweetAction">
                    <div className="actionIcon">
                        <IconButton>
                            <FavoriteBorderOutlinedIcon/>
                        </IconButton>
                    </div>
                    <div className="actionText">31</div>
                </div>
                <div className="tweetAction">
                    <div className="actionIcon">
                        <IconButton>
                            <FileUploadOutlinedIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </Wrapper>
    </>
}
export default TweetDisplay;