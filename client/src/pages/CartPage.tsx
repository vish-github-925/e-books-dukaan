import { useCartItems } from "../context/CartContextProvider";
const CartPage = () => {
  const cartItems = useCartItems();
  console.log(cartItems);
  let TotalPrice = 0;
  cartItems.forEach((item) => {
    TotalPrice = TotalPrice + item.quantity * item.price;
  });
  return (
    <main>
      {cartItems.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.quantity}</p>
        </div>
      ))}
      <h1>Total Price: {TotalPrice}</h1>
    </main>
  );
};
export default CartPage;
