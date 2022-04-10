import PageWrapper from "../Components/PageWrapper/PageWrapper";
import MainpageContainer from "../Components/Mainpage/Container/MainpageContainer";

const HomePage = () => (
    <>
        <PageWrapper
            title="Twitter. it's what's happening / Twitter"
            Component={MainpageContainer}
        />
    </>
);
export default HomePage;
