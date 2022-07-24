import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../Presenter";

const SidebarContainer = () => {
  const [tweetModalOpen, setTweetModalOpen] = useState(false);
  // @ts-ignore
  const { selected } = useSelector((selector) => selector);
  const dispatch = useDispatch();

  return (
    <Sidebar
      dispatch={dispatch}
      selected={selected}
      tweetModalOpen={tweetModalOpen}
      setTweetModalOpen={setTweetModalOpen}
    />
  );
};

export default SidebarContainer;
