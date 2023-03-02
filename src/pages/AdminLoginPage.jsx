import { useState } from "react";
import { Link } from "react-router-dom";
import { ACLogoIcon } from "../assets";
import styles from "../styles/adminLoginPage.module.scss";
import AuthInput from "../components/AuthInput";
import { adminLogin } from "../api/auth";
import { Toast } from "../utilities/sweetalert";

const AdminLoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (account.length === 0) return;
    if (password.length === 0) return;

    const { data }= await adminLogin({
      account,
      password,
    });
    const token = data.data.token;
    if (data.success) {
      localStorage.setItem("authToken", token);
      Toast.fire({
        icon: "success",
        title: "Login Success!",
      });
      return;
    } else {
      Toast.fire({
        icon: "error",
        title: "Login Failed!",
      });
      setAccount("")
      setPassword("")
    }
  };

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
      <button className={styles.button} onClick={handleClick}>
        Login
      </button>
      <Link to="/" className={`${styles["link-container"]}`}>
        <p className={styles.link}>前台登入</p>
      </Link>
    </div>
  );
};

export default AdminLoginPage;
