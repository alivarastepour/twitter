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

export const textAreaOnChange = (
  e: ChangeEvent<HTMLTextAreaElement>,
  setTweetText: Function,
  target: HTMLElement
) => {
  if (e.target.innerText.length === 0) target.style.display = "block";
  else target.style.display = "none";
  setTweetText(e.target.innerText);
};
