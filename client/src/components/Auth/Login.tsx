import { useState } from "react";
import { Form } from "react-router-dom";
import FormInputText from "../Form/FormInputText";
import { AiOutlineLogin } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
const Login = ({ login, setIsLogin }) => {
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  // const [Username, setUsername] = useState("");
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
      <section className="pt-[8rem]">
        <Form
          method="post"
          className="flex flex-col gap-5 items-center rounded-lg 
        border-l-appcolor shadow-lg shadow-slate-500 p-10 dark:bg-[#272727] dark:text-[#c7c7c7]"
        >
          <h1 className="text-center text-xl font-bold italic text-appcolor flex items-center gap-1 justify-center">
            Login <AiOutlineLogin />
          </h1>
          <FormInputText
            inputFor={userData.Email}
            setInputFor={changeUserData}
            placeholder="Enter your email"
            type="Email"
          />
          <FormInputText
            inputFor={userData.Password}
            setInputFor={changeUserData}
            placeholder="Enter your password"
            type="Password"
          />
          <button
            type="submit"
            className="bg-orange-400 py-1 w-min px-4 rounded-lg hover:bg-orange-600 text-white
          "
          >
            Submit
          </button>
        </Form>
        <p className="text-center">
          Dont have an account?{" "}
          <button
            className="text-appcolor mt-5 text-center font-semibold italic"
            onClick={setIsLogin}
          >
            Register
          </button>
        </p>
      </section>
    );
  } else {
    return (
      <section className="pt-[8rem]">
        <Form
          method="post"
          className="flex flex-col gap-5 items-center rounded-lg dark:bg-[#272727] dark:text-[#c7c7c7] 
      border-l-appcolor shadow-lg shadow-slate-500 px-10 py-3"
        >
          <h1 className="text-center text-xl font-bold italic text-appcolor flex items-center justify-center gap-2">
            Register <BiBookOpen />
          </h1>
          <FormInputText
            inputFor={userData.Username}
            setInputFor={changeUserData}
            placeholder="Enter your username"
            type="Username"
          />
          <FormInputText
            inputFor={userData.Email}
            setInputFor={changeUserData}
            placeholder="Enter your email"
            type="Email"
          />
          <FormInputText
            inputFor={userData.Password}
            setInputFor={changeUserData}
            placeholder="Enter your password"
            type="Password"
          />
          <button
            type="submit"
            className="bg-orange-400 py-1 w-min px-4 rounded-lg hover:bg-orange-600 text-white
        "
          >
            Submit
          </button>
        </Form>
        <p className="text-center">
          Already have an account!{" "}
          <button
            type="button"
            className="text-appcolor mt-5 text-center font-semibold italic"
            onClick={setIsLogin}
          >
            Login
          </button>
        </p>
      </section>
    );
  }
};
export default Login;
