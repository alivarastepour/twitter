import {useCallback, useState} from "react";
import axios from "axios";
import useSWR from 'swr'

import Sidebar from "../Sidebar";
import Tweet from "../Tweet";

import {Wrapper} from "./home.styles";

import {HOST} from "../../public/host";


const Home = () => {

    const fetchUserInfo = useCallback((url:string):Promise<any> => {
        return axios.get(url, {
            headers:{
                authorization: `Token ${localStorage.getItem('__ut')}`
            }
        })
    },[])

    const [selected, select] = useState('home');

    const {data, error} = useSWR(`${HOST}/user`, fetchUserInfo);

    return <>
        <Wrapper>
            <div className='left'>
                <Sidebar selected={selected} select={select}/>
            </div>
            <div className='main'>
                <Tweet who={error || !data ? '?' : data.data.user.username}/>
            </div>
            <div className='right'>
                left
            </div>
        </Wrapper>
    </>
}
export default Home;