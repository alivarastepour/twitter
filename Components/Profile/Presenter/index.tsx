import { Avatar } from "@mui/material";
import GlobalHeader from "../../GlobalHeader";
import { Tprofile } from "../Handlers/Tprofile";
import { Wrapper } from "../profile.styles";
import Image from "next/image";
import button from "../../../styles/Button/button.module.scss";
import { toUpper } from "../Handlers/profileHandler";
const Profile = ({ userInfo }: Tprofile) => {
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
        <div className={`edit-profile ${button.whiteButton} font font-eb`}>
          Edit profile
        </div>
        <div className="info">
          <div className="username font font-eb">
            {toUpper(userInfo?.username)}
          </div>
          <div className="username-footer font font-m">
            {"@" + userInfo?.username.replaceAll(" ", "")}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Profile;
