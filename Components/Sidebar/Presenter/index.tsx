import Link from "next/link";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";

import TwitterLogo from "../../Logo/Twitter";
import TweetModal from "../../TweetModal";

import { Wrapper } from "../sideBar.styles";

import styles from "../../../styles/Home/sidebar.module.scss";
import button from "../../../styles/Button/button.module.scss";

import { sidebarContext } from "../Handlers/sidebarContext";
import withIcon from "../../../HOC/withIcon";

const Sidebar = ({ tweetModalOpen, setTweetModalOpen, selected, dispatch }) => (
  <>
    <Wrapper>
      <List>
        <ListItem>
          <div style={{ marginLeft: 10 }}>
            <ListItemButton
              sx={{
                "&:hover": {
                  background: "rgba(29, 155, 240, 0.1)",
                },
                borderRadius: "50%",
                width: 65,
                height: 65,
                display: "flex",
                paddingLeft: 1,
              }}
            >
              <ListItemIcon>
                <TwitterLogo size="S" />
              </ListItemIcon>
            </ListItemButton>
          </div>
        </ListItem>
        {sidebarContext.map((context) => {
          return (
            <ListItem key={context.id}>
              <Link href={context.link} passHref>
                <div>
                  <ListItemButton
                    sx={{ borderRadius: 20, paddingRight: 5 }}
                    className={styles.listItem}
                    onClick={() =>
                      dispatch({
                        type: "sidebar/select",
                        payload: context.title,
                      })
                    }
                  >
                    <ListItemIcon>
                      {withIcon(context.icon, {
                        sx: { width: 35, height: 35, color: "black" },
                      })}
                    </ListItemIcon>
                    <ListItemText>
                      <div
                        className={`font ${styles.listItemText} + ${
                          selected == context.title ? "font-eb" : ""
                        }`}
                      >
                        {context.title}
                      </div>
                    </ListItemText>
                  </ListItemButton>
                </div>
              </Link>
            </ListItem>
          );
        })}
        <ListItem>
          <div>
            <ListItemButton
              sx={{ borderRadius: 20, paddingRight: 5 }}
              className={styles.listItem}
              onClick={() =>
                dispatch({
                  type: "sidebar/select",
                  payload: "more",
                })
              }
            >
              <ListItemIcon>
                <MoreHorizIcon sx={{ width: 35, height: 35, color: "black" }} />
              </ListItemIcon>
              <ListItemText>
                <div
                  className={`font ${styles.listItemText} + ${
                    selected == "more" ? "font-eb" : ""
                  }`}
                >
                  More
                </div>
              </ListItemText>
            </ListItemButton>
          </div>
        </ListItem>
        <ListItem>
          <button
            className={button.blueButton + " " + styles.tweet + " font font-b"}
            onClick={() => setTweetModalOpen(true)}
          >
            Tweet
          </button>
        </ListItem>
      </List>
      <div className="profile-container">
        <div className="pc-avatar">
          <Avatar
            sx={{
              bgcolor: "violet",
              width: 55,
              height: 55,
            }}
          >
            S
          </Avatar>
        </div>
        <div className="font font-b">@alivarastepour</div>
        <div>
          <MoreHorizIcon />
        </div>
      </div>
    </Wrapper>
    <TweetModal open={tweetModalOpen} setOpen={setTweetModalOpen} />
  </>
);

export default Sidebar;
