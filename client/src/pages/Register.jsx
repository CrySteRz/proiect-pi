import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import "../data/css/register/main.css";


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [accountType, setAccountType] = useState("student");
  const [error, setError] = useState("");

  const onAccountTypeChange = (e) => {
    setAccountType(e);
    setError("");
  };
  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setError("");
  };
  const onLastNameChange = (e) => {
    setLastName(e.target.value);
    setError("");
  };
  const onCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
    setError("");
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
    setError("");
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const onCPasswordChange = (e) => {
    setCPassword(e.target.value);
    setError("");
  };
  const onFacultyChange = (e) => {
    setFaculty(e.target.value);
    setError("");
  };

  const validateField = (field, value) => {
    switch (field) {
      case 'firstName':
      case 'lastName':
      case 'faculty':
      case 'companyName':
        if (!value) {
          setError(`${field} is required`);
          return false;
        }
        return true;
      case 'email':
        if (!value) {
          setError('Email is required');
          return false;
        } else if (!value.includes('@')) {
          setError('Email is not valid');
          return false;
        }
        return true;
      case 'phone':
        if (!value) {
          setError('Phone is required');
          return false;
        } else if (!/^\d{10}$/.test(value)) {
          setError('Invalid phone number');
          return false;
        }
        return true;
      case 'password':
        if (!value) {
          setError('Password is required');
          return false;
        } else if (value.length < 8) {
          setError('Password must be at least 8 characters');
          return false;
        }
        return true;
      case 'cpassword':
        if (!value) {
          setError('Confirm password is required');
          return false;
        } else if (value !== password) {
          setError('Passwords do not match');
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
    if (accountType === 'student' || accountType === 'professor') {
      const data = {
        firstName,
        lastName,
        faculty,
        email,
        phone,
        password,
        cpassword,
        accountType,
      };
      if (validate(data)) {
        console.log(data);
      }
    } else if (accountType === 'company') {
      const data = {
        companyName,
        firstName,
        lastName,
        email,
        phone,
        password,
        cpassword,
        accountType,
      };
      if (validate(data)) {
        console.log(data);
      }
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
                <h2 className="title">Register</h2>
                <div style={{width: "8em"}}><Logo /></div>
              </div>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <div className="rowr row-spacer">
                <div className="input-groupr">
                  <label className="label">Choose Account Type</label>
                  <div className="p-t-10">
                    <div
                      className="square-container m-r-45"
                      onClick={() => onAccountTypeChange("student")}
                    >
                      <div
                        className={`square ${
                          accountType === "student" ? "selected" : ""
                        }`}
                      >
                        Student
                      </div>
                    </div>
                    <div
                      className="square-container m-r-45"
                      onClick={() => onAccountTypeChange("professor")}
                    >
                      <div
                        className={`square ${
                          accountType === "professor" ? "selected" : ""
                        }`}
                      >
                        Professor
                      </div>
                    </div>
                    <div
                      className="square-container"
                      onClick={() => onAccountTypeChange("company")}
                    >
                      <div
                        className={`square ${
                          accountType === "company" ? "selected" : ""
                        }`}
                      >
                        Company
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {accountType === "company" && (
                <div className="input-groupr">
                  <label className="label">Nume Companie</label>
                  <input
                    className="input--style-4"
                    type="text"
                    name="company_name"
                    value={companyName}
                    onChange={(e) => onCompanyNameChange(e)}
                  />
                </div>
              )}
              <div className="rowr row-spacer">
                <div className="col-2r">
                  <div className="input-groupr">
                    <label className="label">Prenume</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="first_name"
                      value={firstName}
                      onChange={(e) => onFirstNameChange(e)}
                    />
                  </div>
                </div>
                <div className="col-2r">
                  <div className="input-groupr">
                    <label className="label">Nume</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="last_name"
                      value={lastName}
                      onChange={(e) => onLastNameChange(e)}
                    />
                  </div>
                </div>
              </div>
              {accountType !== "company" && (
                <div className="input-groupr">
                  <label className="label">Facultate</label>
                  <select
                    className="input--style-4"
                    value={faculty}
                    onChange={(e) => onFacultyChange(e)}
                  >
                    <option value="">Alegeti o facultate</option>
                    <option value="1">Faculty of Arts</option>
                    <option value="2">Faculty of Science</option>
                    <option value="3">Faculty of Medicine</option>
                  </select>
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
                <div className="col-2r">
                  <div className="input-groupr">
                    <label className="label">Telefon</label>
                    <input
                      className="input--style-4"
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => onPhoneChange(e)}
                      pattern="[0-9]{10}"
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
                <div className="col-2r">
                  <div className="input-groupr">
                    <label className="label">Confirma Parola</label>
                    <input
                      className="input--style-4"
                      type="password"
                      name="confirm_password"
                      onChange={(e) => onCPasswordChange(e)}
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
                  Register
                </button>
              </div>
              <div className="links">
                <Link to="/login">Already have an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
