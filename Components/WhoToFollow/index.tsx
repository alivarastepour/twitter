import WhoToFollowItem from "../WhoToFollowItem";

import {Wrapper} from './whoToFollow.styles';

import {whoToFollowObjects} from "./whoToFollowObjects";

const WhoToFollow = () => (
    <Wrapper>
        <div className="title font font-eb">Who to follow</div>
        <div>
            {whoToFollowObjects.map(whoToFollowObject => {
                const {avatar, name, username} = whoToFollowObject;
                return <WhoToFollowItem avatar={avatar} username={username} name={name} key={name + username}/>
            })}
        </div>
    </Wrapper>
)

export default WhoToFollow;