import useFetch from "../../../customHooks/useFetch";
import useSidebar from "../../../customHooks/useSidebar";

import Feed from "../presenter";

import { HOST } from "../../../public/host";

const FeedContainer = () => {
  useSidebar({ payload: "home" });

  const { data: userInfo } = useFetch(`${HOST}/user`);
  const { data: tweets, isValidating, error } = useFetch(`${HOST}/articles`);

  return (
    <Feed
      error={error}
      isValidating={isValidating}
      tweets={tweets?.data?.articles}
      userInfo={userInfo?.data?.user}
    />
  );
};
export default FeedContainer;
