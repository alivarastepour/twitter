import TrendItem from "../TrendItem";

import {Wrapper} from './trends.styles';

import {trendObjects} from "./trendObjects";

const Trends = () => (
    <Wrapper>
        <div className='font font-eb title'>Trends for you</div>
        <div>
            {
                trendObjects.map(trendObject => {
                    const {title, content, count} = trendObject;
                    return <TrendItem title={title} content={content} count={count} key={title + content}/>
                })
            }
        </div>
    </Wrapper>
)

export default Trends;