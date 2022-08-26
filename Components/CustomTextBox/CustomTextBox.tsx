import { useCallback, useRef, useState } from "react";
import styles from "../../styles/CustomTextBox/customTextBox.module.scss";

const CustomTextBox = ({ onChange, onClick, setTweetText }) => {
  const [placeHolder, setPlaceHolder] = useState("What's happening?");
  const secondRef = useRef(null);
  const ref = useCallback((node) => {
    if (node)
      node.addEventListener("input", (e) => {
        onChange(e, setTweetText)(secondRef.current);
      });
  }, []);

  return (
    <div className={styles.textBoxContainer}>
      <div
        contentEditable
        ref={ref}
        id="x"
        className={`font font-m ${styles.textBox}`}
      ></div>
      <div
        className={styles.placeHolder + " font font-m"}
        contentEditable={false}
        ref={secondRef}
      >
        {placeHolder}
      </div>
    </div>
  );
};

export default CustomTextBox;
