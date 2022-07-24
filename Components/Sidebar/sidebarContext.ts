import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

type TsidebarContext = {
  id: number;
  title: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export const sidebarContext: TsidebarContext[] = [
  { id: 0, title: "home", link: "/home", icon: HomeRoundedIcon },
  { id: 1, title: "explore", link: "/explore", icon: TagRoundedIcon },
  {
    id: 2,
    title: "notifications",
    link: "/notifications",
    icon: NotificationsOutlinedIcon,
  },
  { id: 3, title: "messages", link: "/messages", icon: EmailOutlinedIcon },
  {
    id: 4,
    title: "bookmarks",
    link: "/bookmarks",
    icon: BookmarkBorderOutlinedIcon,
  },
  { id: 5, title: "lists", link: "/lists", icon: ListAltOutlinedIcon },
  { id: 6, title: "profile", link: "/profile", icon: PermIdentityOutlinedIcon },
];
