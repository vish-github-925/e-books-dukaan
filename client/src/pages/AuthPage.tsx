import { useEffect, useState } from "react";
import { useActionData, useRouteError } from "react-router-dom";
import { useUserContextDispatch } from "../context/UserContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import { API } from "../utils/api_usage";

interface User {
  id: number;
  username: string;
  email: string;
}
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const user = useActionData() as User;
  const dispatch = useUserContextDispatch();
  const navigate = useNavigate();

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
    <main className="min-h-[76vh] flex flex-col gap-10 items-center justify-center">
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
      const res = await axios.post(`${API}/users/register`, userDetails);
      const user = await res.data;
      return user;
    } catch (err) {
      throw new Error(err);
    }
  } else {
    try {
      const res = await axios.post(`${API}/users/login`, userDetails);
      const user = await res.data;
      console.log("user", user);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }
}
