import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};
const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-violet-700 hover:bg-violet-900 hover:text-white px-3 py-2 rounded-3xl text-sm">
      {children}
    </button>
  );
};
export default Button;
