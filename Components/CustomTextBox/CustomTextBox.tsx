import { useCallback, useRef } from "react";

import styles from "../../styles/CustomTextBox/customTextBox.module.scss";
import { TcustomTextBox } from "./Handlers/TcustomTextBox";

const CustomTextBox = ({ onChange, onClick, setTweetText }: TcustomTextBox) => {
  const textBoxRefCallback = useCallback((node: HTMLElement) => {
    if (node)
      node.addEventListener("input", (e: InputEvent) =>
        onChange(e, setTweetText, placeHolderRef.current)
      );
  }, []);

  const placeHolderRef = useRef(null);

  return (
    <div className={styles.textBoxContainer} onClick={() => onClick(true)}>
      <div
        contentEditable={true}
        ref={textBoxRefCallback}
        className={`font font-m ${styles.textBox}`}
      ></div>
      <div
        contentEditable={false}
        ref={placeHolderRef}
        className={`font font-m ${styles.placeHolder}`}
      >
        What's happening?
      </div>
    </div>
  );
};

export default CustomTextBox;
