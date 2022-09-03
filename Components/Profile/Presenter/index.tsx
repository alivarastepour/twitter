import { Avatar } from "@mui/material";
import GlobalHeader from "../../GlobalHeader";
import { Tprofile } from "../Handlers/Tprofile";
import { Wrapper } from "../profile.styles";
import Image from "next/image";
import button from "../../../styles/Button/button.module.scss";
import { toUpper } from "../Handlers/profileHandler";
import { useState } from "react";
import dynamic from "next/dynamic";
const EditProfile = dynamic(() => import("../../EditProfile"));
const Profile = ({ userInfo }: Tprofile) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GlobalHeader content={toUpper(userInfo?.username)} />
      <Wrapper>
        <div className="header-picture">
          <Image
            src="/profileHeader.png"
            width="665"
            height="200"
            className="hp-image"
          />
        </div>
        <div className="profile-picture-container">
          <div className="profile-picture">
            <Avatar
              sx={{ width: "100%", height: "100%", bgcolor: "violet" }}
              src={userInfo?.image}
            >
              <span className="font font-m avatar-text">
                {userInfo?.username[0].toLocaleUpperCase()}
              </span>
            </Avatar>
          </div>
        </div>
        <div
          className={`edit-profile ${button.whiteButton} font font-eb`}
          onClick={() => setOpen(true)}
        >
          Edit profile
        </div>
        {open && <EditProfile open={open} setOpen={setOpen} />}
        <div className="info">
          <div className="username font font-eb">
            {toUpper(userInfo?.username)}
          </div>
          <div className="username-footer font font-m">
            {"@" + userInfo?.username.replaceAll(" ", "")}
          </div>
          <div className="stats">
            <div className="st-container font">
              <span className="font-sb">
                {Math.floor(Math.random() * 10) + "  "}
              </span>
              <span className="indicator">Following</span>
            </div>
            <div className="st-container font">
              <span className="font-sb">
                {Math.floor(Math.random() * 10) + "  "}
              </span>
              <span className="indicator">Follower</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Profile;
