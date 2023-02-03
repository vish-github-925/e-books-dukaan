import { useCartItems } from "../../context/CartContextProvider";
import DisplayCartItem from "./DisplayCartItem";
const DisplayItems = () => {
  const cartItems = useCartItems();
  return (
    <section className="min-h-[200px] w-1/2 bg-slate-100 rounded-md p-6 flex flex-col space-y-4">
      {cartItems.map((item) => (
        <DisplayCartItem key={item.id} item={item} />
      ))}
    </section>
  );
};
export default DisplayItems;
