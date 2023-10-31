import { auth } from "../config/firebase";

export const Main = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <p>{auth.currentUser?.displayName}</p>
    </div>
  );
};
