import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../data/css/register/main.css";
import {Logo} from "../components/";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const validateField = (field, value) => {
    switch (field) {
      case "email":
        if (!value) {
          setError("Email is required");
          return false;
        } else if (!value.includes("@")) {
          setError("Email is not valid");
          return false;
        }
        return true;
      case "password":
        if (!value) {
          setError("Password is required");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const validate = (data) => {
    let isValid = true;
    Object.entries(data).forEach(([field, value]) => {
      if (!validateField(field, value)) {
        isValid = false;
      }
    });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    if (validate(data)) {
      console.log(data);
      navigate("/jobdetails");
    }
    
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
      ></link>
      <div className="page-wrapper bg-gra-02 pt-4 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <div className="title-with-logo">
                <h2 className="title">Login</h2>
                <div style={{width: "8em"}}>
                <Logo />
                </div>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div className="rowr row-spacer">
                <div className="col-2r">
                  <div className="input-groupr">
                    <label className="label">Email</label>
                    <input
                      className="input--style-4"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => onEmailChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="rowr row-spacer">
                <div className="col-2r">
                  <div className="input-groupr">
                    <label className="label">Parola</label>
                    <input
                      className="input--style-4"
                      type="password"
                      name="password"
                      onChange={(e) => onPasswordChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="p-t-15">
                <button
                  className="btn btn--radius-2 btn--blue"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="links">
                <Link to="/register">I don't have an account</Link>
                <Link to="/forgot-password">Forgot your password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
