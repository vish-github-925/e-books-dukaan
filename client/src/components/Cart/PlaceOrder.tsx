import { useUserContext } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { useCartItemsDispatch } from "../../context/CartContextProvider";

const PlaceOrder = ({ toggleModal }) => {
  const user = useUserContext();
  const navigate = useNavigate();
  const dispatch = useCartItemsDispatch();
  return (
    <div className="flex gap-4">
      <button
        className="bg-orange-400 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white
        dark:text-white"
        onClick={() => {
          if (user.username) {
            console.log("Congrats shopping finished");
          } else {
            toggleModal();
            console.log("Please login to place the order");
          }
        }}
      >
        Place your order
      </button>
      <button
        className="bg-red-400 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white
        dark:text-white"
        onClick={() => {
          dispatch({
            type: "delete_from_cart",
          });
        }}
      >
        Clear cart
      </button>
    </div>
  );
};
export default PlaceOrder;
