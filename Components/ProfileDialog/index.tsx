import {useState} from "react";

import Menu from "@mui/material/Menu";


import {
    avatar,
    bio,
    dialogHeader,
    followButton,
    follower,
    footer, numberContainer, stateContainer,
    title,
    username,
    Wrapper
} from "./ProfileDialog.styles";
import Avatar from "@mui/material/Avatar";
import styles from '../../styles/Button/button.module.scss'

const ProfileDialog = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        const target = event.currentTarget;
        setTimeout(() => setAnchorEl(target), 500);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return <>
        <Wrapper>
            {<div className='visibility'>
                <span
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onMouseEnter={handleClick}
                    className='name'
                >
                    ali varaste pour
                </span>
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
                        <div style={dialogHeader}>
                            <div>
                                <Avatar src='/sample.jpg' sx={avatar}/>
                            </div>
                            <div>
                                <button className={styles.blackButton + " font font-b"}
                                        style={followButton}>Follow
                                </button>
                            </div>
                        </div>
                        <div className='font font-eb' style={title}>ali
                            varaste pour
                        </div>
                        <div className='font font-l' style={username}>@swishSwishMDFK
                        </div>
                        <div style={bio} className='font font-m'>Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur eum fuga
                            libero minima mollitia nesciunt non nulla odio praesentium.
                        </div>
                        <div
                            style={footer}
                        >
                            <div style={follower}>
                                <span style={numberContainer} className='font font-b'>1</span>
                                <span style={stateContainer}
                                      className='font font-l'>Follower</span>
                            </div>
                            <div style={{cursor: 'pointer'}}>
                                <span style={numberContainer} className='font font-b'>1</span>
                                <span style={stateContainer}
                                      className='font font-l'>Following</span>
                            </div>
                        </div>
                    </div>
                </Menu>
            </div>}
        </Wrapper>
    </>
}
export default ProfileDialog;