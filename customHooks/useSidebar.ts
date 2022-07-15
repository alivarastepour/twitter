import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const useSidebar = ({payload}) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const {selected} = useSelector(selector => selector)
    useEffect(() => {
        if (selected === payload)
            return;
        dispatch({type: 'sidebar/select', payload})
    }, [dispatch, payload, selected])
}

export default useSidebar;