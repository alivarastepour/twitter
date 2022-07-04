import {Wrapper} from './whoToFollow.styles'
import WhoToFollowItem from "../WhoToFollowItem";
import {whoToFollowObjects} from "./whoToFollowObjects";

const WhoToFollow = () => {
    return <>
        <Wrapper>
            <div className="title font font-eb">Who to follow</div>
            <div>
                {whoToFollowObjects.map(whoToFollowObject => {
                    const {avatar, name, username} = whoToFollowObject;
                    return <WhoToFollowItem avatar={avatar} username={username} name={name}/>
                })}
            </div>
        </Wrapper>
    </>
}

export default WhoToFollow;