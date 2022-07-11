import axios from "axios";
import {HOST} from "../../public/host";
import useSWR from "swr";

const Profile = ({username}) => {
    const getUser = async url => {
        const token = localStorage.getItem('__ut');
        return await axios.get(url, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    }

    const {data} = useSWR(`${HOST}/profiles/${username}`, getUser);
    return <>salam</>
}


export default Profile;