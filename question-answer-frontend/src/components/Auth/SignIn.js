import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authActions";
import "../../css/styles/main/Auth/signin.css";
import Svg from "./iconComponent/Svg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate tanımlandı

  const dispatch = useDispatch();
  const loginError = useSelector((state) => {
    if (state.authReducer) {
      return state.authReducer.LoginInformations.error;
    }
  });

  useEffect(() => {
    if (loginError != null) {
      if (typeof loginError === 'string' && !loginError.includes('400')) {
        
        navigate('/');
        
      } 
    }
  }, [loginError, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(login(email, password));
  };

  return (
    <div className="signin-main">
      <form onSubmit={handleSubmit}>
        <div className="screen-1">
          <Svg></Svg>
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
          <button className="login" type="submit">
            Login
          </button>
          {loginError && (
            <p className="error-message text-danger p-2">
              Invalid email or password. Please try again.
            </p>
          )}

          <div className="footer">
            <span>Signup</span>
            <span>Forgot Password?</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
