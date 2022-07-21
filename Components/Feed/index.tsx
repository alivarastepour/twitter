import Tweet from "../Tweet";
import TweetDisplay from "../tweetDisplay";
import Spinner from "../Spinner";
import { HOST } from "../../public/host";
import useSidebar from "../../customHooks/useSidebar";
import useFetch from "../../customHooks/useFetch";
import GlobalHeader from "../GlobalHeader";

const Feed = () => {
  useSidebar({ payload: "home" });
  const { data: userInfo } = useFetch(`${HOST}/user`);
  const { data: tweets, isValidating, error } = useFetch(`${HOST}/articles`);
  return (
    <>
      <GlobalHeader content={"Home"} />
      <Tweet isModal={false} who={userInfo?.data?.user?.username || "?"} />
      {!isValidating && !error ? (
        tweets.data.articles.map((tweet) => {
          return (
            <TweetDisplay
              tweet={tweet?.body}
              avatarURL={tweet?.author?.image}
              name={tweet?.author?.username}
              username={tweet?.author?.username}
              time={tweet?.createdAt}
              key={tweet?.createdAt}
              bio={tweet?.author?.bio}
            />
          );
        })
      ) : error ? (
        <></>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default Feed;
