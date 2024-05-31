import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions"; // Varsayım: signup aksiyonu var
import "../../css/styles/main/Auth/signup.css";
import Svg from "./iconComponent/Svg";
import { useNavigate } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.css";
import alertify from "alertifyjs";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate(); // useNavigate tanımlandı

  const dispatch = useDispatch();
  const registerError = useSelector((state) => {
    if (state.authReducer) {
      return state.authReducer.RegisterInformations.error;
    }
  });
  useEffect(() => {
    if (registerError != null) {
      if (typeof registerError === 'string' && !registerError.includes('400')) {
        navigate('/');
        window.location.reload();
      } else {
        alertify.error('Kayıt başarısız!');
      }
    }
  }, [registerError, navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "role") {
      setRole(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(email, password, name, role));
    
  };

  return (
    <div className="signup-main">
      <form onSubmit={handleSubmit}>
        <div className="screen-2">
          <Svg></Svg>
          <div className="name">
            <label htmlFor="name">Name</label>
            <div className="sec-2">
              <ion-icon name="person-outline"></ion-icon>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <div className="sec-2">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                name="email"
                placeholder="Username@gmail.com"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                className="pas"
                type="password"
                name="password"
                placeholder="············"
                value={password}
                onChange={handleChange}
              />
              <ion-icon className="show-hide" name="eye-outline"></ion-icon>
            </div>
          </div>
          <div className="role">
            <label htmlFor="role">Role</label>
            <div className="sec-2">
              <select name="role" value={role} onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
          <button className="signup" type="submit">
            Sign Up
          </button>
          <div className="footer">
            <span>Login</span>
            <span>Forgot Password?</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
