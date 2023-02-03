const DisplayCartItem = ({ item }) => {
  return (
    <div className="h-[150px] w-full bg-slate-50 rounded-sm">
      <h1>{item.title}</h1>
      <h2>{item.price}</h2>
      <h2>{item.discount}</h2>
    </div>
  );
};
export default DisplayCartItem;
