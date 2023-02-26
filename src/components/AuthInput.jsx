import styles from "../styles/authInput.module.scss";
const AuthInput = ({ label, id, type, placeholder, value, onChange }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles["input-container"]}`}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type || "text"}
          placeholder={placeholder || ""}
          value={value || ""}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AuthInput;
