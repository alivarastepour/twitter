import {Wrapper} from './homePageWrapper.styles'
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import Trends from "../Trends";
import WhoToFollow from "../WhoToFollow";
import Footer from "../Home/Footer";
import {useState} from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

const HomePageWrapper = ({Component, title, props}) => {
    const [selected, select] = useState('home');

    return <>
        <Wrapper>
            <div className='left'>
                <Sidebar selected={selected} select={select}/>
            </div>
            <div className="main">
                <PageWrapper
                    title={title}
                    props={props}
                    Component={Component}
                />
            </div>

            <div className='right'>
                <SearchBar/>
                <Trends/>
                <WhoToFollow/>
                <Footer/>
            </div>
        </Wrapper>
    </>
}

export default HomePageWrapper;