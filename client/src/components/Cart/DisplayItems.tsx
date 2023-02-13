import { useCartItems } from "../../context/CartContextProvider";
import DisplayCartItem from "./DisplayCartItem";
const DisplayItems = () => {
  const cartItems = useCartItems();
  return (
    <section className="flex flex-col gap-4 items-center">
      <div className="min-h-[200px] w-[350px] rounded-md flex flex-wrap gap-10 justify-around items-center max-w-2xl mx-auto dark:bg-[#272727] dark:text-[#c7c7c7]">
        {cartItems.map((item) => (
        <DisplayCartItem key={item.id} item={item} />
        ))}
      </div>
      <div></div>
    </section>
  );
};
export default DisplayItems;
