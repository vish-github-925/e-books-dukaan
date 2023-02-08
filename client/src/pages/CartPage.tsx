import DisplayItems from "../components/Cart/DisplayItems";
import PriceDetails from "../components/Cart/PriceDetails";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import { useUserContext } from "../context/UserContextProvider";
const CartPage = () => {
  const [openOrCloseModal, setOpenOrCloseModal] = useState(false);

  const user = useUserContext();
  const toggleModal = () => {
    setOpenOrCloseModal(!openOrCloseModal);
  };
  return (
    <main className="flex flex-col relative px-20 py-5 gap-y-10 mt-20 overflow-x-scroll">
      {/* Display items */}
      {/* float row */}
      <div className="flex flex-row relative gap-6">
        <DisplayItems />
        <PriceDetails />
        {user.username ||
          (openOrCloseModal && (
            <Modal
              toggleModal={toggleModal}
              content="Please login to place the order"
            />
          ))}
      </div>
    </main>
  );
};
export default CartPage;
