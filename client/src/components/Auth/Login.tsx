import { useState } from "react";
import FormInputText from "../Form/FormInputText";
import UserForm from "../Form/UserForm";

const Login = ({ login, setIsLogin }) => {
  const [userData, setUserData] = useState({
    Email: "",
    Password: "",
    Username: "",
  });
  const changeUserData = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  if (login) {
    return (
      <UserForm
        title="Login"
        userData={userData}
        downButton="Register"
        downText="Don't have an account ?"
        changeUserData={changeUserData}
        setIsLogin={setIsLogin}
      />
    );
  } else {
    return (
      <UserForm
        title="Register"
        userData={userData}
        downButton="Login"
        downText="Already have an account ?"
        changeUserData={changeUserData}
        setIsLogin={setIsLogin}
      >
        <FormInputText
          inputFor={userData.Username}
          setInputFor={changeUserData}
          placeholder="Enter your username"
          type="Username"
        />
      </UserForm>
    );
  }
};
export default Login;
