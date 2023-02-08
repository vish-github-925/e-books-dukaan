const DisplayCartItem = ({ item }) => {
  return (
    <div className="min-h-[75px] px-10 py-4 w-[250px] bg-slate-50 rounded-sm">
      <h1 className="font-semibold italic text-lg">Title: {item.title}</h1>
      <h2 className="text-lg">
        Price:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(item.price)}
      </h2>
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
      <h2>Quantity: {item.quantity}</h2>
    </div>
  );
};
export default DisplayCartItem;
