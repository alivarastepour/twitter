import Sidebar from "../Sidebar";
import {useState} from "react";

const Home = () => {
    const [selected, select] = useState('home')
    const render = () => {
        switch (selected) {
            case 'home':
                return <>home</>
            case 'explore':
                return <>explore</>
            case 'notifications':
                return <>notifications</>
            case 'messages':
                return <>messages</>
            case 'bookmarks':
                return <>bookmarks</>
            case 'lists':
                return <>list</>
            case 'profile':
                return <>profile</>
        }
    }
    return <>
        <Sidebar selected={selected} select={select}/>
        {render()}
    </>
}
export default Home;