import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import styles from "./login.module.css"; 
import loginimage from "./loginimage.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div
          className={`${styles["form-container"]} ${styles["log-in-container"]}`}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.h1}>Login</h1>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <a className={styles.a} href="#">
              Forgot your password?
            </a> */}
            {error && <div className="alert alert-danger">{error}</div>}
            <button className={`${styles.button} ${styles.loginbutton}`}>
              Log In
            </button>
            <button
              className={`${styles["a"]} ${styles["social"]} ${styles["button"]} ${styles["loginbutton"]} `}
              onClick={handleGoogleSignIn}
            >
              <i class="fab fa-google-plus-g"></i>GOOGLE
            </button>

            <div className="p-4 box mt-3 text-center">
              Don't have an account?{" "}
            </div>
            <div className="text-center">
              <Link to="/signup" className={styles.link}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
        <div className={styles["overlay-container"]}>
          <div className={styles.overlay}>
            <div
              className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
            >
              <img src={loginimage} className={styles.image} alt="LoginImage"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
