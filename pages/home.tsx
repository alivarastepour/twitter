import HomePageWrapper from "../Components/HomePageWrapper";
import FeedContainer from "../Components/Feed/Container/FeedContainer";

const HomePage = () => (
  <HomePageWrapper
    title={"() Home / Twitter"}
    props={{}}
    Component={FeedContainer}
  />
);
export default HomePage;
