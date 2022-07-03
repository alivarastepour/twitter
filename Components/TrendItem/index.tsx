import {Wrapper} from "./trendItem.styles";

const TrendItem = ({title, content, count}) =>{
    return <>
        <Wrapper>
            <div className='ti-title font font-m ti-margin'>{title}</div>
            <div className='ti-content font font-b ti-margin'>{content}</div>
            <div className='ti-count font font-m ti-margin'>{count} {count && 'tweets'}</div>
        </Wrapper>
    </>
}

export default TrendItem;