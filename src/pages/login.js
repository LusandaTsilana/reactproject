// import { useForm } from "react-hook-form";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import "../pages/login.css";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  //redirected to home page after login/signin

  const navigate = useNavigate();
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div id="form-field">
          <label>Email : </label>
          <input type="text" />
        </div>

        <div id="form-field">
          <label>Password : </label>
          <input type="text" />
        </div>

        <div>
          <p>OR</p>

          <button onClick={loginWithGoogle}>Login with Google</button>
        </div>
      </form>
    </div>
  );
};
