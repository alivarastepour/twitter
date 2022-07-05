import Avatar from "@mui/material/Avatar";

import {Wrapper} from './whoToFollowItem.styles';

import styles from '/styles/Button/button.module.scss';

const WhoToFollowItem = ({avatar, name, username}) => (
    <Wrapper>
        <div className="wf-avatar">
            <Avatar sx={{width:60, height:60}} src={avatar}/>
        </div>
        <div className="wf-flex">
            <div className="wf-content">
                <div className='wf-name font font-eb'>{name}</div>
                <div className='wf-username font font-m'>{username}</div>
            </div>
            <div className="wf-follow-button">
                <button className={styles.blackButton + ' font font-b'}>Follow</button>
            </div>
        </div>
    </Wrapper>
)

export default WhoToFollowItem;