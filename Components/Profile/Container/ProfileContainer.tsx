import { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import Profile from "../Presenter";

import useFetch from "../../../customHooks/useFetch";
import { HOST } from "../../../public/host";
import { TprofileContainer } from "../Handlers/TprofileContainer";

const ProfileContainer = ({ username }: TprofileContainer) => {
  const url: string =
    username === "profile" ? `${HOST}/user` : `${HOST}/profiles/${username}`;

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch({ type: "sidebar/select", payload: "profile" });
  }, []);

  const { data: userInfo } = useFetch(url);

  return <Profile userInfo={userInfo?.data?.user} />;
};

export default ProfileContainer;
