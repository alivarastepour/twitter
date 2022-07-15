import axios from "axios";
import {HOST} from "../../public/host";
import useSWR from "swr";
import useSidebar from "../../customHooks/useSidebar";

const Profile = ({data}) => {
    useSidebar({payload: 'profile'});
    console.log(data);
    return <>salam</>
}


export default Profile;