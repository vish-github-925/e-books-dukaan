import { ReactElement, useEffect, useState } from "react";
import { useActionData, useRouteError } from "react-router-dom";
import { useUserContextDispatch } from "../context/UserContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const user = useActionData();
  const error = useRouteError();
  const dispatch = useUserContextDispatch();
  const navigate = useNavigate();
  console.log("user", user);
  console.log("Error", error);
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
    <main className="mt-20 overflow-y-scroll">
      <section className="h-28 max-w-4xl mx-auto">
        {isLogin ? <Login /> : <Register />}
      </section>
      <button onClick={() => setIsLogin(!isLogin)}>login / Register</button>
    </main>
  );
};

export default AuthPage;

export async function action({ request }) {
  const formData = await request.formData();
  const userDetails = Object.fromEntries(formData);
  console.log(userDetails);
  try {
    const res = await axios.post(
      "http://localhost:5005/api/v1/users/login",
      userDetails
    );
    const user = await res.data;
    console.log("user", user);
    return user;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}
