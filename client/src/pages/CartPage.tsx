import DisplayItems from "../components/Cart/DisplayItems";
import PriceDetails from "../components/Cart/PriceDetails";
import { useState, useEffect } from "react";
import Modal from "../components/Modal/Modal";
import { useUserContext } from "../context/UserContextProvider";
import { useCartItems } from "../context/CartContextProvider";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const CartPage = () => {
  const [openOrCloseModal, setOpenOrCloseModal] = useState(false);

  const user = useUserContext();
  const cartItems = useCartItems();
  const toggleModal = () => {
    setOpenOrCloseModal(!openOrCloseModal);
  };
  useEffect(() => {
    if (openOrCloseModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [openOrCloseModal]);
  return (
    <main
      className={`flex flex-col min-h-screen relative px-20 py-5 gap-y-10 mt-[4rem] pt-20`}
    >
      {/* Display items */}
      {/* float row */}
      {cartItems?.length > 0 ? (
        <div
          className={`flex flex-row relative ${
            openOrCloseModal ? "backdrop-blur-3xl" : ""
          }`}
        >
          <DisplayItems />
          <PriceDetails toggleModal={toggleModal} />
          {openOrCloseModal && (
            <Modal
              toggleModal={toggleModal}
              content="Please login to place the order"
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6">
          <h1
            className="text-center font-bold text-xl italic text-orange-500
        "
          >
            Please add items to the cart
          </h1>
          <MdOutlineAddShoppingCart className="text-orange-600 text-[150px]" />
        </div>
      )}
    </main>
  );
};
export default CartPage;
