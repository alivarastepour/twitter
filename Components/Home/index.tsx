import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import useSWR from 'swr'

import Sidebar from "../Sidebar";
import Tweet from "../Tweet";

import {Wrapper} from "./home.styles";

import {HOST} from "../../public/host";
import SearchBar from "../SearchBar";
import TweetDisplay from "../tweetDisplay";


const Home = () => {

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

    const [selected, select] = useState('home');

    const userInfo = useSWR(`${HOST}/user`, fetchUserInfo);
    const tweets = useSWR(`${HOST}/articles`, fetchTweets);
    return <>
        <Wrapper>
            <div className='left'>
                <Sidebar selected={selected} select={select}/>
            </div>
            <div className='main'>
                <Tweet
                    who={userInfo && userInfo.data && userInfo.data.data && userInfo.data.data.user ? userInfo.data.data.user.username : '?'}/>
                {
                    tweets && tweets.data && tweets.data.data && tweets.data.data.articles && tweets.data.data.articles.map(tweet => {
                        return <TweetDisplay tweet={tweet.body}
                                             avatarURL={tweet.author.image}
                                             name={tweet.author.username}
                                             username={tweet.author.username}
                                             time={tweet.createdAt} key={tweet.createdAt}
                                             bio={tweet.author.bio}
                        />
                    })
                }

            </div>
            <div className='right'>
                <SearchBar/>
            </div>
        </Wrapper>
    </>
}
export default Home;