import { useCartItems } from "../../context/CartContextProvider";
import PlaceOrder from "./PlaceOrder";
const PriceDetails = ({ toggleModal }) => {
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
    <div className="flex flex-col gap-10 items-center fixed top-[140px] right-10 dark:bg-[#202020]">
      <section className="text-lg w-[500px] h-[300px] rounded-lg bg-slate-50 py-4 px-6 flex flex-col dark:bg-[#191919] dark:text-[#c7c7c7] space-y-4">
        <h2
          className="font-semibold text-lg
       text-slate-400 items-start border-b border-b-slate-400  py-3"
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
            <h2>
              -{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(Discount)}
            </h2>
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
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "INR",
            }).format(TotalPriceAfterDiscount)}
          </h2>
        </div>
        {Discount > 0 ? (
          <h2 className="tracking-wide font-semibold text-xl text-green-600">
            You will save{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "INR",
            }).format(Discount)}{" "}
            on this order
          </h2>
        ) : (
          ""
        )}
      </section>
      <PlaceOrder toggleModal={toggleModal} />
    </div>
  );
};
export default PriceDetails;
