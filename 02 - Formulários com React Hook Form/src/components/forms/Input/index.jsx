import styles from "./styles.module.css";
import { forwardRef } from "react";

export const Input = forwardRef(({ label, ...rest }, ref) => {
  // console.log(label);
  // console.log(rest);

  return (
    <div className={styles.inputBox}>
      <label>{label}</label>
      <input ref={ref} {...rest} />
    </div>
  );
});
