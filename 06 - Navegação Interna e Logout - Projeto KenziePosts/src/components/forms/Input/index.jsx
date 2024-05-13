import styles from "./styles.module.scss";
import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  // console.log(label);
  // console.log(rest);

  return (
    <div className={styles.inputBox}>
      <label>{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
