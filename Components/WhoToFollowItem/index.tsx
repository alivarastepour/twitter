import {Wrapper} from './whoToFollowItem.styles'
import Avatar from "@mui/material/Avatar";
import styles from '/styles/Button/button.module.scss'

const WhoToFollowItem = ({avatar, name, username}) => {
    return <>
        <Wrapper>
            <div className="wf-avatar">
                <Avatar src={avatar}/>
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
    </>
}

export default WhoToFollowItem;