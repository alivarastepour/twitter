import { ChangeEvent, Dispatch } from "react";

export const validInfo = (): boolean => {
  return false;
};

export const nameOnChange = (
  dispatch: Dispatch<any>,
  type: string,
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
): void => {
  const name: string = event.target.value;
  if (name.length >= 50) {
    event.preventDefault();
  } else {
    dispatch({ type, payload: name });
  }
};
