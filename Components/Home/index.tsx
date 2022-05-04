import Sidebar from "../Sidebar";
import {useCallback, useEffect, useState} from "react";
import {Wrapper} from "./home.styles";
import Tweet from "../Tweet";
import axios from "axios";
import {HOST} from "../../public/host";
import useSWR from 'swr'


const Home = (props) => {

    const fetchUserInfo = useCallback((url) => {
        return axios.get(url, {
            headers:{
                authorization: `Token ${localStorage.getItem('__ut')}`
            }
        })
    },[])

    const [selected, select] = useState('home')
    const {data, error} = useSWR(`${HOST}/user`, fetchUserInfo)
    return <>
        <Wrapper>
            <div className='left'>
                <Sidebar selected={selected} select={select}/>
            </div>
            <div className='main'>
                <Tweet who={error ? '?' : data.data.user.username}/>
            </div>
            <div className='right'>
                left
            </div>
        </Wrapper>
    </>
}
export default Home;