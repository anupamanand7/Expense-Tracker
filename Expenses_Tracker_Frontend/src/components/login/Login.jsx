import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../config/urlConfig";
import toast, { Toaster } from "react-hot-toast";
import { context } from "../../context/context";
import LandNavBar from "../landingNavBar/LandNavBar";
import "./Login.css";

export default function Login() {
  const { state, dispatch } = useContext(context);

  const navigate = useNavigate();

  function showSignUp() {
    navigate("/signUp");
  }

  const loginUser = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => {
        const token = res.headers.get("token");
        if (token) {
          localStorage.setItem("token", token);
        }
        return res.json();
      })
      .then((result) => {
        if (result.success) {
          dispatch({ type: "setUser", payload: result.data });
          e.target.reset();
          toast.success("You successfully logged in!");
          setTimeout(() => {
            if (state.isSignUp) {
              navigate("/selectCurrency");
            } else {
              navigate("/home");
            }
          }, 1500);
        } else {
          toast.error(JSON.stringify(result.message));
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <LandNavBar />
      <div className="login">
        <div className="loginHero">
          <div className="loginLeft">
            <h1>Login to Your Account</h1>
            <Toaster position="top-center" />

            <form className="loginForm" onSubmit={loginUser}>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></input>
              <br />
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              ></input>
              <br />
              <button className="buttonLeft">Login</button>
            </form>
          </div>

          <div className="loginRight">
            <h2>Don't have an account? </h2>
            <p>Signup and start using this amazing app!</p>
            <button className="buttonClick" onClick={showSignUp}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
