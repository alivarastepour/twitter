import { Provider } from "react-redux";

import store from "../../store/store";

import SearchBar from "../SearchBar";
import Trends from "../Trends";
import WhoToFollow from "../WhoToFollow";
import Footer from "../GlobalFooter";
import PageWrapper from "../PageWrapper/PageWrapper";
import SidebarContainer from "../Sidebar/Container/SidebarContainer";

import { Wrapper } from "./homePageWrapper.styles";
import { TPageWrapper } from "../PageWrapper/Handlers/TPageWrapper";
import Spinner from "../Spinner";
import useAuth from "../../customHooks/useAuth";

const HomePageWrapper = ({ Component, title, props }: TPageWrapper) => {
  const loading = useAuth("/signin", false);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Wrapper>
          <Provider store={store}>
            <div className="left">
              <SidebarContainer />
            </div>
            <div className="main">
              <PageWrapper title={title} props={props} Component={Component} />
            </div>
            <div className="right">
              <SearchBar />
              <Trends />
              <WhoToFollow />
              <Footer />
            </div>
          </Provider>
        </Wrapper>
      )}
    </>
  );
};
export default HomePageWrapper;
