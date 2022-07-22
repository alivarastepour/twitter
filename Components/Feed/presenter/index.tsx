import Tweet from "../../Tweet";
import TweetDisplay from "../../tweetDisplay";
import Spinner from "../../Spinner";
import GlobalHeader from "../../GlobalHeader";

import { Tfeed } from "../Handlers/Tfeed";

const Feed = ({ userInfo, isValidating, error, tweets }: Tfeed) => (
  <>
    <GlobalHeader content={"Home"} />
    <Tweet isModal={false} who={userInfo?.username || "?"} />
    {!isValidating && !error ? (
      tweets.map((tweet) => {
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
      <>
        <div></div>
      </>
    ) : (
      <Spinner />
    )}
  </>
);

export default Feed;
