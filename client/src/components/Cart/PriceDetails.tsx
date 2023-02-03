import { useCartItems } from "../../context/CartContextProvider";
const PriceDetails = () => {
  const cartItems = useCartItems();
  let TotalPrice = 0;
  let Discount = 0;
  let TotalPriceAfterDiscount;
  let countOfCartItems = cartItems.length;
  cartItems.forEach((item) => {
    TotalPrice = TotalPrice + item.quantity * item.price;
  });
  cartItems.forEach((item) => {
    if (item.discount) {
      Discount = Discount + item.quantity * item.discount;
    } else {
      Discount += 0;
    }
  });
  if (Discount) {
    TotalPriceAfterDiscount = TotalPrice - Discount;
  } else {
    TotalPriceAfterDiscount = TotalPrice;
  }
  return (
    <section className="text-lg w-1/3 h-[300px] rounded-lg bg-slate-50 py-4 px-6 flex flex-col space-y-4 absolute right-4 top-5">
      <h2
        className="font-semibold text-lg
       text-slate-400 items-start border border-b-slate-400  py-3"
      >
        PRICE DETAILS
      </h2>
      <div className="flex items-center justify-between">
        <h2>Price ( {countOfCartItems} items )</h2>
        <h2>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
          }).format(TotalPrice)}
        </h2>
      </div>
      {Discount > 0 ? (
        <div className="flex items-center justify-between">
          <h2>Discount</h2>
          <h2>{Discount}</h2>
        </div>
      ) : (
        ""
      )}

      <div className="flex items-center justify-between">
        <h2>Delivery charges</h2>
        <h2>FREE</h2>
      </div>
      <div className="flex items-center justify-between border-dotted border-y-2  py-4">
        <h1 className="font-semibold">TOTAL AMOUNT</h1>
        <h2
          className="font-semibold
        "
        >
          {TotalPriceAfterDiscount}
        </h2>
      </div>
      {Discount > 0 ? (
        <h2 className="tracking-wide font-semibold text-xl text-green-600">
          You will save {Discount} on this order
        </h2>
      ) : (
        ""
      )}
    </section>
  );
};
export default PriceDetails;
