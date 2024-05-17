import { forwardRef } from "react";
import styles from "./style.module.scss";

export const TextArea = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div className={styles.textAreaBox}>
      <label className="paragraph">{label}</label>
      <textarea ref={ref} {...rest} />
      {/* {error ? <p>{error.message}</p> : null} */}
      {error && <p>{error.message}</p>}
    </div>
  );
});
