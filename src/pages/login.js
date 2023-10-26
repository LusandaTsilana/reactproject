// import { useForm } from "react-hook-form";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import "../pages/login.css";

export const Login = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
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

          <button onClick={signInWithGoogle}>Login with Google</button>
        </div>
      </form>
    </div>
  );
};
