import Link from 'next/link'

import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import TwitterLogo from "../Logo/Twitter";

import {Wrapper} from './sideBar.styles'

import styles from "../../styles/Home/sidebar.module.scss";
import button from '../../styles/Button/button.module.scss';

import {sidebarContext} from "./sidebarContext";
import TweetModal from "../TweetModal";
import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const getIcon = (title) => {
    let Icon = null;
    switch (title) {
        case 'home':
            Icon = <HomeRoundedIcon sx={{width: 35, height: 35, color: 'black'}}/>
            break
        case 'explore':
            Icon = <TagRoundedIcon sx={{width: 35, height: 35, color: 'black'}}/>
            break
        case 'notifications':
            Icon = <NotificationsOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
            break
        case 'messages':
            Icon = <EmailOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
            break
        case 'bookmarks':
            Icon = <BookmarkBorderOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
            break
        case 'lists':
            Icon = <ListAltOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
            break
        case 'profile':
            Icon = <PermIdentityOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
            break
    }
    return Icon
}

const Sidebar = () => {
    const [tweetModalOpen, setTweetModalOpen] = useState(false);
    // @ts-ignore
    const {selected} = useSelector(selector => selector);
    const dispatch = useDispatch();

    return <>
        <Wrapper>
            <List>
                <ListItem>
                    <div style={{marginLeft: 10}}>
                        <ListItemButton sx={{
                            '&:hover': {
                                background: 'rgba(29, 155, 240, 0.1)',
                            }, borderRadius: '50%', width: 65, height: 65, display: 'flex', paddingLeft: 1
                        }}>
                            <ListItemIcon>
                                <TwitterLogo size='S'/>
                            </ListItemIcon>
                        </ListItemButton>
                    </div>
                </ListItem>
                {
                    sidebarContext.map(context => {
                        return <ListItem key={context.id}>
                            <Link href={context.link} passHref>
                                <div>
                                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                                    onClick={() => dispatch({
                                                        type: 'sidebar/select',
                                                        payload: context.title
                                                    })}>
                                        <ListItemIcon>
                                            {getIcon(context.title)}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <div
                                                className={`font ${styles.listItemText} + ${selected == context.title ? 'font-eb' : ''}`}>
                                                {context.title}
                                            </div>
                                        </ListItemText>
                                    </ListItemButton>
                                </div>
                            </Link>
                        </ListItem>
                    })
                }
                <ListItem>
                    <div>
                        <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                        onClick={() => dispatch({
                                            type: 'sidebar/select',
                                            payload: 'more'
                                        })}>
                            <ListItemIcon>
                                <MoreHorizIcon sx={{width: 35, height: 35, color: 'black'}}/>
                            </ListItemIcon>
                            <ListItemText>
                                <div className={`font ${styles.listItemText} + ${selected == 'more' ? 'font-eb' : ''}`}>
                                    More
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </div>
                </ListItem>
                <ListItem>
                    <button className={button.blueButton + ' ' + styles.tweet + ' font font-b'}
                            onClick={() => setTweetModalOpen(true)}>Tweet
                    </button>
                </ListItem>
            </List>
        </Wrapper>
        <TweetModal open={tweetModalOpen} onClose={() => setTweetModalOpen(false)}/>
    </>
}

export default Sidebar