import Tweet from "../Tweet";
import TweetDisplay from "../tweetDisplay";
import Spinner from "../Spinner";
import useSWR from "swr";
import {HOST} from "../../public/host";
import {useCallback} from "react";
import axios from "axios";

const Feed = () => {


    const fetchUserInfo = useCallback((url: string): Promise<any> => {
        return axios.get(url, {
            headers: {
                authorization: `Token ${localStorage.getItem('__ut')}`
            }
        })
    }, [])

    const fetchTweets = useCallback((url: string): Promise<any> => {
        return axios.get(url, {
            headers: {
                authorization: `Token ${localStorage.getItem('__ut')}`
            }
        })
    }, [])
    const userInfo = useSWR(`${HOST}/user`, fetchUserInfo);
    const {data, isValidating, error} = useSWR(`${HOST}/articles`, fetchTweets);
    return <>
        <Tweet isModal={false}
               who={userInfo?.data?.data?.user?.username || '?'}/>

        {
            !isValidating && !error ? data.data.articles.map(tweet => {
                return <TweetDisplay tweet={tweet?.body}
                                     avatarURL={tweet?.author?.image}
                                     name={tweet?.author?.username}
                                     username={tweet?.author?.username}
                                     time={tweet?.createdAt} key={tweet?.createdAt}
                                     bio={tweet?.author?.bio}
                />
            }) : error ? <></> : <Spinner/>
        }
    </>
}
export default Feed;