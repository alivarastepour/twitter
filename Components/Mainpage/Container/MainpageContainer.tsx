import {useContext, useEffect, useState} from "react";
import {authContext} from "../../../pages/_app";
import {useRouter} from "next/router";
import Mainpage from "../Presenter";

const MainpageContainer = () => {

    const {auth, setAuth} = useContext(authContext);

    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('__ut');
        if (token) {
            setAuth(true)
            router.push('/home')
        } else
            setLoading(false);
    }, [auth, router, setAuth])

    return <Mainpage loading={loading}/>
}
export default MainpageContainer;