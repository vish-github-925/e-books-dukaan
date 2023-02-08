import { useEffect } from "react";
import { useUserContextDispatch } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
const LogoutPage = () => {
  const dispatch = useUserContextDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Logging out");
    dispatch({
      type: "logout",
    });
    navigate("/");
  }, [dispatch]);
  return <h1>Logging out...</h1>;
};
export default LogoutPage;
