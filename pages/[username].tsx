import Profile from "../Components/Profile";
import axios from "axios";
import {HOST} from "../public/host";
import HomePageWrapper from "../Components/HomePageWrapper";
import {useSelector} from "react-redux";

const ProfilePage = (props) => (
    <>
        <HomePageWrapper
            title={props.username}
            Component={Profile}
            props={props}/>
    </>
)

export const getStaticPaths = async () => {
    const authors = [];
    const paths = [{params: {username: 'profile'}}];
    const fallback = false;
    const articles = await axios.get(`${HOST}/articles?limit=1000`);
    articles.data.articles.map(article => authors.push(article.author.username));
    const usersSet = new Set(authors);
    // @ts-ignore
    const users = [...usersSet];
    for (const user of users) {
        paths.push({
            params: {
                username: user
            }
        })
    }
    return {
        paths,
        fallback
    }
}

export const getStaticProps = async (context) => {
    const {username} = context.params;
    const requestURL: string = username === 'profile' ? `${HOST}/user` : `${HOST}/profiles/${username}`;
    const token = localStorage.getItem('__ut');
    const data = await axios.get(requestURL, {
        headers: {
            Authorization: `Token ${token}`
        }
    })

    return {
        props: data
    }
}

export default ProfilePage;