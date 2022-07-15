import axios from "axios";
import {HOST} from "../../public/host";
import useSWR from "swr";
import useSidebar from "../../customHooks/useSidebar";

const Profile = ({username}) => {
    useSidebar({payload: 'profile'});
    const getUser = async url => {
        const token = localStorage.getItem('__ut');
        return await axios.get(url, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    }
    const requestURL: string = username === 'profile' ? `${HOST}/user` : `${HOST}/profiles/${username}`
    const {data} = useSWR(requestURL, getUser);
    return <>salam</>
}


export default Profile;