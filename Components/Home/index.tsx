import Sidebar from "../Sidebar";
import {useState} from "react";
import {Wrapper} from "./home.styles";

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
        <Wrapper>
            <div className='left'>
            <Sidebar selected={selected} select={select}/>
            </div>
            <div className='main'>
                main
            </div>
            <div className='right'>
                left
            </div>
        </Wrapper>
    </>
}
export default Home;