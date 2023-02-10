import { ReactElement, useEffect, useState } from "react";
import { useActionData, useRouteError } from "react-router-dom";
import { useUserContextDispatch } from "../context/UserContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../components/Auth/Login";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const user = useActionData();
  const error = useRouteError();
  const dispatch = useUserContextDispatch();
  const navigate = useNavigate();
  console.log("user", user);
  console.log("Error", error);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  useEffect(() => {
    if (user) {
      dispatch({
        type: "login_or_register",
        id: user.id,
        email: user.email,
        username: user.username,
      });
      navigate("/");
    }
  }, [user]);

  return (
    <main className="max-h-[87vh] flex flex-col gap-10 items-center pb-[22rem]">
      <Login login={isLogin} setIsLogin={toggleLogin} />
    </main>
  );
};

export default AuthPage;

export async function action({ request }) {
  const formData = await request.formData();
  const userDetails = Object.fromEntries(formData);
  if (userDetails.Username) {
    try {
      const res = await axios.post(
        "https://e-books-dukaan-backend.onrender.com/api/v1/users/register",
        userDetails
      );
      const user = await res.data;
      return user;
    } catch (err) {
      throw new Error(err);
    }
  } else {
    try {
      const res = await axios.post(
        "https://e-books-dukaan-backend.onrender.com/api/v1/users/login",
        userDetails
      );
      const user = await res.data;
      console.log("user", user);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }
}
