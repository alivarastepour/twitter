import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../customHooks/useFetch";
import { HOST } from "../../public/host";

const Profile = ({ username }) => {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch({ type: "sidebar/select", payload: "profile" });
  }, []);
  const url: string =
    username === "profile" ? `${HOST}/user` : `${HOST}/profiles/${username}`;
  const { data: userInfo } = useFetch(url);
  return <>salam</>;
};

export default Profile;
