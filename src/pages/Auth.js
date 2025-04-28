import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const API_URL = "AIzaSyB2NB61Hnm60WHmVk2ADA0N0ZC20Zfza3Q";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    const endpoint = isLogin
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_URL}`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_URL}`;

    try {
      const response = await axios.post(endpoint, payload);
      console.log(response.data);
      dispatch(login({
        auth:{
          email:response.data.email,
        },
        idToken: response.data.idToken,
      }))
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h1 className="text-centered mb-4">{isLogin ? "Login" : "SignUp"}</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="inputEmail" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isLogin && (
          <div class="mb-3">
            <label for="inputPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <p className="text-center mb-4">
          {isLogin
            ? "Dont have an account then SignUp"
            : "Already have an account then Login"}
          <button type="button" className="btn btn-link" onClick={toggleLogin}>
            {isLogin ? "SignUp" : "Login"}
          </button>
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Auth;
