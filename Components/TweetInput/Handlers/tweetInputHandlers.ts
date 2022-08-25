import { ChangeEvent } from "react";

// @ts-ignore
String.prototype.count = function (char: string): number {
  let counter: number = 0;
  if (char.length != 1) return -1;
  else {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === char) counter++;
    }
  }
  return counter;
};

export const createShortForm = (who: string): string => {
  let shortForm: string;
  let separated: string[] = who.split(" ");
  if (separated.length > 1)
    shortForm = who.split(" ")[0][0] + who.split(" ")[1][0];
  else shortForm = who[0];
  return shortForm.toUpperCase();
};

export const calculateRows = (tweetText: string): number => {
  let value = Math.ceil(tweetText.length / 28);
  // @ts-ignore
  let enterCounter: number = tweetText.count("\n");
  value += enterCounter;
  if (value !== 0) return value;
  return 1;
};

export const textAreaOnChange = (
  e: ChangeEvent<HTMLTextAreaElement>,
  setTweetText: Function
): void => {
  if (e.target.innerHTML.length > 280) e.preventDefault();
  else setTweetText(e.target.innerHTML);
};

export const textAreaOnChangeDecorator = (
  e: ChangeEvent<HTMLTextAreaElement>,
  setTweetText: Function
) => {
  return (target) => {
    console.log(target);
    if (e.target.innerHTML.length === 0) {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
    if (e.target.innerHTML.length > 280) e.preventDefault();
    else setTweetText(e.target.innerHTML);
  };
};
