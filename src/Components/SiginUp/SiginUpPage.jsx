import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import styles from "./siginup.module.css";
import siginupimage from "./siginup.jpg";

const SiginUpPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div
          className={`${styles["form-container"]} ${styles["log-in-container"]}`}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.h1}>SIGINUP</h1>

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
            {error && <div className="alert alert-danger">{error}</div>}
            <button className={`${styles.button} ${styles.signupButton}`}>
              SIGN UP
            </button>
            <div className="p-4 box mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className={styles.link}>
                Log In
              </Link>
            </div>
          </form>
        </div>

        <div className={styles["overlay-container"]}>
          <div className={styles.overlay}>
            <div
              className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
            >
              <img src={siginupimage} className={styles.image} alt="SiginUp Logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiginUpPage;
