import { useUserContext } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
  const user = useUserContext();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="bg-orange-400 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white"
        onClick={() => {
          if (user.username) {
            console.log("Congrats shopping finished");
          } else {
            navigate("/");
            console.log("Please login to place the order");
          }
        }}
      >
        Place your order
      </button>
    </div>
  );
};
export default PlaceOrder;
