import {useState} from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import GroupIcon from "@mui/icons-material/Group";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import {iconStyles, iconWrapperStyles, menuItemWrapper, statusWrapper, Wrapper} from "./tweetVisibility.styles";

const TweetVisibility = ({show}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [tweetVisibilityState, setTweetVisibilityState] = useState('Everyone');

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return <>
        <Wrapper>
            {show && <div className='visibility'>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <div className='font font-eb visibilityStatus'>
                        <div className='visibilityIcon'>
                            {tweetVisibilityState === 'Everyone' ?
                                <LanguageIcon/> : tweetVisibilityState === 'People you follow' ? <GroupIcon/> :
                                    <AlternateEmailIcon/>}
                        </div>
                        <div>
                            {tweetVisibilityState + " can reply"}
                        </div>
                    </div>
                </Button>
                <Menu
                    id="basic-menu"
                    className='menuMUI'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className='menu' style={{margin: 12}}>
                        <div className="content" style={{marginBottom: 30, marginRight: 40}}>
                            <div style={{fontSize: '1.1rem'}} className='font font-eb'>Who can reply?</div>
                            <div style={{marginTop: 5, color: 'rgb(100, 100, 113)'}} className='font font-m'>Choose who
                                can reply to this Tweet <br/> Anyone mentioned can always reply.
                            </div>
                        </div>
                        <MenuItem onClick={handleClose} sx={{marginBottom: 2, height: 70, borderRadius: 5}}
                                  onClickCapture={() => setTweetVisibilityState('Everyone')}>
                            <div style={menuItemWrapper}>
                                <div>
                                    <div style={iconWrapperStyles}>
                                        <LanguageIcon sx={iconStyles}/>
                                    </div>
                                </div>
                                <div style={statusWrapper}>
                                    Everyone
                                </div>
                                {/*to do: tick icon*/}
                            </div>
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{marginBottom: 2, height: 70, borderRadius: 5}}
                                  onClickCapture={() => setTweetVisibilityState('People you follow')}>
                            <div style={menuItemWrapper}
                            >
                                <div>
                                    <div style={iconWrapperStyles}>
                                        <GroupIcon sx={iconStyles}/>
                                    </div>
                                </div>
                                <div style={statusWrapper}>
                                    People you follow
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{height: 70, borderRadius: 5}}
                                  onClickCapture={() => setTweetVisibilityState('Only people you mention')}>
                            <div style={menuItemWrapper}
                            >
                                <div>
                                    <div style={iconWrapperStyles}>
                                        <AlternateEmailIcon sx={iconStyles}/>
                                    </div>
                                </div>
                                <div style={statusWrapper}>
                                    Only people you mention
                                </div>
                            </div>
                        </MenuItem>
                    </div>
                </Menu>
            </div>}
        </Wrapper>
    </>
}
export default TweetVisibility;