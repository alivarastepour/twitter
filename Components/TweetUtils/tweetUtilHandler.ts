import axios from "axios";
import {HOST} from "../../public/host";

const extractTags = (tweet: string): string[] => {
    return tweet.split(' ').filter(word => word.startsWith('#'))
}

export const postTweet = (body: string): void => {
    const tagList: string[] = extractTags(body);
    const url: string = `${HOST}/articles`;
    const data = {
        article: {
            tagList,
            body,
            description: '-',
            title: '-'
        }
    }
    axios.post(url, data, {
        headers: {
            authorization: `Token ${localStorage.getItem('__ut')}`
        }
    }).then(a => console.log(a)).catch(e => console.log(e.response));
}

