import { ChangeEventHandler } from "react";

export type TtweetInput = {
  tweetText: string;
  shortForm: string;
  calculateRows: number;
  setTweetVisibility: Function;
  textAreaOnChange: ChangeEventHandler<HTMLTextAreaElement>;
};
