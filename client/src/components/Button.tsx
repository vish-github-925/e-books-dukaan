import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type ButtonProps = {
  children: ReactNode;
};
const Button = ({ children }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-appcolor hover:bg-blue-700 text-white px-3 py-2 rounded-xl text-sm"
      onClick={() => {
        navigate("/cart");
      }}
    >
      {children}
    </button>
  );
};
export default Button;
