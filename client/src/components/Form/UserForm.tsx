import { Form } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import FormInputText from "./FormInputText";
import { ReactNode, MouseEventHandler } from "react";
import { BiBookOpen } from "react-icons/bi";
type UserData = {
  Email: string;
  Password: string;
  Username?: string;
};
type UserFormProps = {
  children?: ReactNode;
  userData: UserData;
  changeUserData: Function;
  setIsLogin: MouseEventHandler<HTMLButtonElement>;
  downButton: string;
  downText: string;
  title: string;
};
const UserForm = ({
  children,
  userData,
  changeUserData,
  setIsLogin,
  downButton,
  downText,
  title,
}: UserFormProps) => {
  return (
    <section className="">
      <Form
        method="post"
        className="flex flex-col gap-5 items-center rounded-lg 
  border-l-appcolor shadow-lg shadow-slate-500 p-10 dark:bg-[#272727] dark:text-[#c7c7c7]"
      >
        <h1 className="text-center text-xl font-bold italic text-appcolor flex items-center gap-1 justify-center">
          {title} {title === "Login" ? <AiOutlineLogin /> : <BiBookOpen />}
        </h1>
        {children}

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
        {downText}
        <button
          className="text-appcolor mt-5 text-center font-semibold italic"
          onClick={setIsLogin}
        >
          {downButton}
        </button>
      </p>
    </section>
  );
};
export default UserForm;
