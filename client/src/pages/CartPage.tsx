import DisplayItems from "../components/Cart/DisplayItems";
import PriceDetails from "../components/Cart/PriceDetails";
import { useState, useEffect } from "react";
import Modal from "../components/Modal/Modal";
import { useCartItems } from "../context/CartContextProvider";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const CartPage = () => {
  const [openOrCloseModal, setOpenOrCloseModal] = useState(false);

  const cartItems = useCartItems();
  const toggleModal = () => {
    setOpenOrCloseModal(!openOrCloseModal);
  };
  useEffect(() => {
    if (openOrCloseModal) {
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflowY = "hidden";
    } else {
      document.body.scrollTop = 0;
      document.body.style.overflowY = "scroll";
    }
  }, [openOrCloseModal]);
  return (
    <main
      className={`max-w-4xl mx-auto flex flex-col dark:bg-[#202020] dark:text-[#c7c7c7] px-20 gap-y-10 pt-10`}
    >
      {/* Display items */}
      {/* float row */}
      {cartItems?.length > 0 ? (
        <div
          className={`flex flex-col lg:flex-row gap-x-16 relative ${
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
