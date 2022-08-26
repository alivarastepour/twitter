import { ChangeEventHandler } from "react";

export type TtweetInput = {
  shortForm: string;
  setTweetText: Function;
  setTweetVisibility: Function;
  textAreaOnChange: Function;
};
