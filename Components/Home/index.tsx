import List from "@mui/material/List";
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from '../../styles/Home/home.module.scss'
import {useState} from "react";

const Home = () => {
    const [selected, select] = useState('home')
    return <>
        <List>
            <ListItem>
                <div>
                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                    onClick={() => select('home')}>
                        <ListItemIcon>
                            <HomeRoundedIcon sx={{width: 35, height: 35, color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText>
                            <div className={`font ${styles.listItemText} + ${selected == 'home' ? 'font-eb' : ''}`}>
                                Home
                            </div>
                        </ListItemText>
                    </ListItemButton>
                </div>
            </ListItem>
            <ListItem>
                <div>
                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                    onClick={() => select('explore')}>
                        <ListItemIcon>
                            <TagRoundedIcon sx={{width: 35, height: 35, color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText>
                            <div className={`font ${styles.listItemText} + ${selected == 'explore' ? 'font-eb' : ''}`}>
                                Explore
                            </div>
                        </ListItemText>
                    </ListItemButton>
                </div>
            </ListItem>
            <ListItem>
                <div>
                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                    onClick={() => select('notifications')}>
                        <ListItemIcon>
                            <NotificationsOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText>
                            <div className={`font ${styles.listItemText} + ${selected == 'notifications' ? 'font-eb' : ''}`}>
                                Notifications
                            </div>
                        </ListItemText>
                    </ListItemButton>
                </div>
            </ListItem>
            <ListItem>
                <div>
                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                    onClick={() => select('messages')}>
                        <ListItemIcon>
                            <EmailOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText>
                            <div className={`font ${styles.listItemText} + ${selected == 'messages' ? 'font-eb' : ''}`}>
                                Messages
                            </div>
                        </ListItemText>
                    </ListItemButton>
                </div>
            </ListItem>
            <ListItem>
                <div>
                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                    onClick={() => select('bookmarks')}>
                        <ListItemIcon>
                            <BookmarkBorderOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText>
                            <div className={`font ${styles.listItemText} + ${selected == 'bookmarks' ? 'font-eb' : ''}`}>
                                Bookmarks
                            </div>
                        </ListItemText>
                    </ListItemButton>
                </div>
            </ListItem>
            <ListItem>
                <div>
                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                    onClick={() => select('lists')}>
                        <ListItemIcon>
                            <ListAltOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText>
                            <div className={`font ${styles.listItemText} + ${selected == 'lists' ? 'font-eb' : ''}`}>
                                Lists
                            </div>
                        </ListItemText>
                    </ListItemButton>
                </div>
            </ListItem>
            <ListItem>
                <div>
                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                    onClick={() => select('profile')}>
                        <ListItemIcon>
                            <PermIdentityOutlinedIcon sx={{width: 35, height: 35, color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText>
                            <div className={`font ${styles.listItemText} + ${selected == 'profile' ? 'font-eb' : ''}`}>
                                Profile
                            </div>
                        </ListItemText>
                    </ListItemButton>
                </div>
            </ListItem>
            <ListItem>
                <div>
                    <ListItemButton sx={{borderRadius: 20, paddingRight: 5}} className={styles.listItem}
                                    onClick={() => select('more')}>
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

        </List>
    </>
}
export default Home;