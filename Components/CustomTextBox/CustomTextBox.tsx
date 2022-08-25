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
    <div className={styles.hello}>
      <div
        contentEditable
        ref={ref}
        id="x"
        className={`font font-m ${styles.textBox}`}
        // onClick={() => {
        //   secondRef.current.style.display = "none";
        // }}
      >
        {/* {"          a       "} */}
      </div>
      <div
        className={styles.hi + " font font-m"}
        contentEditable={false}
        ref={secondRef}
      >
        {placeHolder}
      </div>
    </div>
  );
};

export default CustomTextBox;
