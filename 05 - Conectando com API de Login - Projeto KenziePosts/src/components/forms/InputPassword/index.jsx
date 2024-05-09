import styles from "./styles.module.scss";
import { forwardRef } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.inputBox}>
      <label>{label}</label>
      <div className={styles.inputGrid}>
        <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
        </button>
      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
