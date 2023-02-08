import { useCartItemsDispatch } from "../../context/CartContextProvider";

const DisplayCartItem = ({ item }) => {
  const dispatch = useCartItemsDispatch();
  return (
    <div className="h-[200px] px-16 py-5 w-full bg-slate-50 rounded-sm hover:shadow-blue-500 hover:shadow cursor-pointer transition-all">
      <h1 className="font-semibold italic text-lg">Title: {item.title}</h1>
      <h2 className="text-lg font-semibold">
        Price:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(item.price)}
      </h2>
      {item.discount ? (
        <h2
          className="text-sm
      "
        >
          Discount:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
          }).format(item.discount)}
        </h2>
      ) : null}

      <h2 className="font-semibold">Quantity: {item.quantity}</h2>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            dispatch({
              type: "increase_quantity",
              id: item.id,
              category: item.category,
            });
          }}
          className="bg-slate-400 hover:bg-slate-500 p-1 cursor-pointer mr-3 text-white rounded-lg h-7 w-7 flex items-center justify-center"
        >
          +
        </button>
        {item.quantity > 1 ? (
          <button
            onClick={() => {
              dispatch({
                type: "decrease_quantity",
                id: item.id,
                category: item.category,
              });
            }}
            className="bg-slate-300 hover:bg-slate-400 p-1 cursor-pointer mr-3 text-white rounded-lg h-7 w-7 flex items-center justify-center"
          >
            -
          </button>
        ) : null}
      </div>
      <button
        className="bg-red-400 text-white py-1 px-3 hover:bg-red-600 rounded-sm flex mx-auto mt-1"
        onClick={() => {
          dispatch({
            type: "remove_cart_item",
            id: item.id,
            category: item.category,
          });
        }}
      >
        Remove Item
      </button>
    </div>
  );
};
export default DisplayCartItem;
