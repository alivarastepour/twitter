import { useCallback, useState } from "react";
import styles from "../../styles/CustomTextBox/customTextBox.module.scss";

const CustomTextBox = ({ onChange, onClick }) => {
  const [placeHolder, setPlaceHolder] = useState("What's happening?");

  const ref = useCallback((node) => {
    if (node) node.addEventListener("input", onChange);
  }, []);

  return (
    <div
      contentEditable
      ref={ref}
      id="x"
      className={`font font-m ${styles.textBox}`}
    >
      {placeHolder}
    </div>
  );
};

export default CustomTextBox;
