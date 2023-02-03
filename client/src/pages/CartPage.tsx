import DisplayItems from "../components/Cart/DisplayItems";
import PriceDetails from "../components/Cart/PriceDetails";
import { useCartItems } from "../context/CartContextProvider";
const CartPage = () => {
  const cartItems = useCartItems();
  console.log(cartItems);

  return (
    <main className="flex relative px-10 py-5">
      {/* Display items */}
      {/* float row */}
      <DisplayItems />
      <PriceDetails />
    </main>
  );
};
export default CartPage;
