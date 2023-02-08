import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Modal = ({ content, toggleModal }) => {
  const navigate = useNavigate();
  return (
    <div className="h-[75vh] w-full bg-white absolute px-36 py-20 flex flex-col items-center z-10 blur-none">
      <div className="font-bold text-4xl text-teal-700">{content}</div>
      <AiOutlineCloseCircle
        type="button"
        onClick={toggleModal}
        className="absolute right-16 top-6 text-xl cursor-pointer"
      />
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="bg-appcolor py-2 px-4 cursor-pointer hover:bg-blue-700 max-w-max  text-white rounded-lg mt-5"
      >
        Login
      </button>
      <button
        onClick={toggleModal}
        className="bg-red-500 py-2 px-4 cursor-pointer hover:bg-red-400 max-w-max  text-white rounded-lg mt-5"
      >
        Close
      </button>
    </div>
  );
};
export default Modal;
