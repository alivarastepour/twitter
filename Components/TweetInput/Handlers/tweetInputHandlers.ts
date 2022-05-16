import {ChangeEvent} from "react";

export const createShortForm = (who: string): string => {
    let shortForm: string;
    let separated: string[] = who.split(' ');
    if (separated.length > 1)
        shortForm = who.split(' ')[0][0] + who.split(' ')[1][0]
    else
        shortForm = who[0]
    return shortForm
}

export const calculateRows = (tweetText: string): number => {
    const value = Math.ceil(tweetText.length / 51);
    if (value !== 0)
        return value;
    return 1
}

export const textAreaOnChange = (e: ChangeEvent<HTMLTextAreaElement>, setTweetText: Function): void => {
    if (e.target.value.length > 280)
        e.preventDefault();
    else
        setTweetText(e.target.value)
}