import { useState } from "react";
import { Link } from "react-router-dom";
import { ACLogoIcon } from "../assets";
import styles from "../styles/adminLoginPage.module.scss";
import AuthInput from "../components/AuthInput";

const AdminLoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <ACLogoIcon />
      <h4>後台登入</h4>
      <AuthInput
        label="Account"
        id="account"
        placeholder="Enter your account."
        value={account}
        onChange={(inputValue) => setAccount(inputValue)}
      />
      <AuthInput
        label="Password"
        id="password"
        type="password"
        placeholder="Enter your password."
        value={password}
        onChange={(inputValue) => setPassword(inputValue)}
      />
      <button className={styles.button}>Login</button>
      <Link to="/" className={`${styles["link-container"]}`}>
        <p className={styles.link}>前台登入</p>
      </Link>
    </div>
  );
};

export default AdminLoginPage;
