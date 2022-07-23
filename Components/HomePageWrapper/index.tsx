import { Provider } from "react-redux";

import store from "../../store/store";

import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import Trends from "../Trends";
import WhoToFollow from "../WhoToFollow";
import Footer from "../GlobalFooter";
import PageWrapper from "../PageWrapper/PageWrapper";

import { Wrapper } from "./homePageWrapper.styles";
import { ThomePageWrapper } from "./Handlers/ThomePageWrapper";

const HomePageWrapper = ({ Component, title, props }: ThomePageWrapper) => (
  <>
    <Wrapper>
      <Provider store={store}>
        <div className="left">
          <Sidebar />
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
  </>
);

export default HomePageWrapper;
