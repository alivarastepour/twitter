import {useState} from "react";

import Menu from "@mui/material/Menu";


import {Wrapper} from "./ProfileDialog.styles";
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
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div>
                                <Avatar sx={{width: 60, height: 60}}>S</Avatar>
                            </div>
                            <div>
                                <button className={styles.blackButton + " font font-b"}
                                        style={{
                                            width: 100,
                                            height: 40,
                                            borderRadius: 20,
                                            fontSize: '1.0rem',
                                            cursor: 'pointer',
                                        }}>Follow
                                </button>
                            </div>
                        </div>
                        <div className='font font-eb' style={{fontSize: '1.2rem', marginTop: 10}}>ali varaste pour</div>
                        <div className='font font-l' style={{
                            fontSize: '1rem', marginTop: 5, color: 'rgb(83, 100, 113)'
                        }}>@swishSwishMDFK
                        </div>
                        <div style={{color: 'rgb(83, 100, 113)', marginTop: 15}} className='font font-m'>Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur eum fuga
                            libero minima mollitia nesciunt non nulla odio praesentium.
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop:10}}
                        >
                            <div style={{marginRight: 20}}>
                                <span style={{fontSize: '1.2rem', marginRight:5}} className='font font-b'>1</span>
                                <span style={{fontSize: '1.1rem', color: 'rgb(83, 100, 113)'}}
                                      className='font font-l'>Follower</span>
                            </div>
                            <div>
                                <span style={{fontSize: '1.2rem', marginRight:5}} className='font font-b'>1</span>
                                <span style={{fontSize: '1.1rem', color: 'rgb(83, 100, 113)'}}
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