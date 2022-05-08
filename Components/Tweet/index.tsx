import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import {Wrapper} from './tweet.styles'
import {useState} from "react";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import GroupIcon from '@mui/icons-material/Group';

const Tweet = ({who}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss".length)
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
                    <textarea value={tweetText} onChange={e => {
                        if (e.target.value.length == 280)
                            e.preventDefault();
                        else
                            setTweetText(e.target.value)
                    }
                    } className='textArea font font-m' cols={45} rows={calculateRows()}/>
                </div>
            </div>
            <div className='visibility'>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Dashboard
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
                        <MenuItem onClick={handleClose} sx={{marginBottom: 2, height: 70, borderRadius: 5}}>
                            <div style={{display: 'flex', alignItems:'center'}}>
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
                            </div>
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{marginBottom: 2, height: 70, borderRadius: 5}}>
                            <div style={{display: 'flex', alignItems:'center'}}>
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
                        <MenuItem onClick={handleClose} sx={{height: 70, borderRadius: 5}}>
                            <div style={{display: 'flex', alignItems:'center'}}>
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
            </div>
        </Wrapper>

    </>
}
export default Tweet;