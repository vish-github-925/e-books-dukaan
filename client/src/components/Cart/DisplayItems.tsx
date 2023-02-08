import { useCartItems } from "../../context/CartContextProvider";
import DisplayCartItem from "./DisplayCartItem";
const DisplayItems = () => {
  const cartItems = useCartItems();
  return (
    <section className="flex flex-col gap-4 items-center">
      <div className="min-h-[200px] w-[650px] bg-slate-100 rounded-md p-6 flex flex-wrap gap-10 justify-around items-center max-w-2xl mx-auto">
        {cartItems.map((item) => (
          <DisplayCartItem key={item.id} item={item} />
        ))}
      </div>
      <div></div>
    </section>
  );
};
export default DisplayItems;
