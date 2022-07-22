import { Tauthor } from "./Tauthor";
import { Ttweet } from "./Ttweet";

export type Tfeed = {
  tweets: Ttweet[];
  userInfo: Tauthor;
  isValidating: boolean;
  error: boolean;
};
