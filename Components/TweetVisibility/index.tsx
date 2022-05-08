import {Button, Menu, MenuItem} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GroupIcon from "@mui/icons-material/Group";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {useState} from "react";

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
                        <div style={{display: 'flex', alignItems: 'center'}}>

                            <div>
                                <div style={{
                                    background: 'rgb(29, 155, 240)',
                                    borderRadius: '50%',
                                    width: 47,
                                    height: 47,
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}>
                                    <LanguageIcon sx={{color: 'white', width: 25, height: 25}}/>
                                </div>
                            </div>
                            <div style={{color: 'rgb(100, 100, 113)', marginLeft: 10, fontSize: '1.2rem'}}>
                                Everyone
                            </div>
                            {/*to do: tick icon*/}
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{marginBottom: 2, height: 70, borderRadius: 5}}
                              onClickCapture={() => setTweetVisibilityState('People you follow')}>
                        <div style={{display: 'flex', alignItems: 'center'}}
                        >
                            <div>
                                <div style={{
                                    background: 'rgb(29, 155, 240)',
                                    borderRadius: '50%',
                                    width: 47,
                                    height: 47,
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}>
                                    <GroupIcon sx={{color: 'white', width: 25, height: 25}}/>
                                </div>
                            </div>
                            <div style={{color: 'rgb(100, 100, 113)', marginLeft: 10, fontSize: '1.2rem'}}>
                                People you follow
                            </div>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{height: 70, borderRadius: 5}}
                              onClickCapture={() => setTweetVisibilityState('Only people you mention')}>
                        <div style={{display: 'flex', alignItems: 'center'}}
                        >
                            <div>
                                <div style={{
                                    background: 'rgb(29, 155, 240)',
                                    borderRadius: '50%',
                                    width: 47,
                                    height: 47,
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}>
                                    <AlternateEmailIcon sx={{color: 'white', width: 25, height: 25}}/>
                                </div>
                            </div>
                            <div style={{color: 'rgb(100, 100, 113)', marginLeft: 10, fontSize: '1.2rem'}}>
                                Only people you mention
                            </div>
                        </div>
                    </MenuItem>
                </div>
            </Menu>
        </div>}
    </>
}
export default TweetVisibility;