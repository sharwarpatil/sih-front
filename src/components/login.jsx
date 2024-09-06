import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BASE_URL from "../Server/base_url";
import { useTranslation } from "react-i18next";

const Login = ({ loadUser, onRouteChange }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const { t, i18n } = useTranslation(); // Use the 't' function for translations

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const onSubmitLogIn = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signInEmail, password: signInPassword }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        localStorage.setItem("role", json.role);
        handleClick();
      } else {
        Swal.fire({
          icon: "warning",
          title: t("invalidCredentials"), // Use translation here
          text: "",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container whole-body-login">
        <div className="form-container">
          <p className="title">{t("loginTitle")}</p>

          <div className="input-group">
            <label htmlFor="email">{t("email")}</label>
            <input
              type="email"
              name="Email"
              placeholder=""
              onChange={onEmailChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">{t("password")}</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              onChange={onPasswordChange}
            />

            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                {t("forgotPassword")}
              </a>
            </div>
          </div>
          <button className="sign" onClick={onSubmitLogIn}>
            {t("logIn")}
          </button>

          <p className="signup">
            {t("noAccount")}
            <Link rel="noopener noreferrer" to="/signup">
              {t("signUp")}
            </Link>
          </p>
        </div>
        <div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("hi")}>हिन्दी</button>
        </div>
      </div>
    </>
  );
};

export default Login;
