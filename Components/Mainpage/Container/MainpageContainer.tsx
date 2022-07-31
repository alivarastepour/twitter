import useAuth from "../../../customHooks/useAuth";
import Mainpage from "../Presenter";

const MainpageContainer = () => {
  const loading = useAuth("/home", true);

  return <Mainpage loading={loading} />;
};
export default MainpageContainer;
