import Profile from "../Components/Profile";
import axios from "axios";
import { HOST } from "../public/host";
import HomePageWrapper from "../Components/HomePageWrapper";

const ProfilePage = (props) => (
  <>
    <HomePageWrapper title={props.username} Component={Profile} props={props} />
  </>
);

export const getStaticPaths = async () => {
  const authors = [];
  const paths = [{ params: { username: "profile" } }];
  const fallback = false;
  const articles = await axios.get(`${HOST}/articles?limit=1000`);
  articles.data.articles.map((article) =>
    authors.push(article.author.username)
  );
  const usersSet = new Set(authors);
  // @ts-ignore
  const users = [...usersSet];
  for (const user of users) {
    paths.push({
      params: {
        username: user,
      },
    });
  }
  return {
    paths,
    fallback,
  };
};

export const getStaticProps = async (context) => {
  return {
    props: context.params,
  };
};

export default ProfilePage;
