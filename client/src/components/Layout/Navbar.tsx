import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartItems } from "../../context/CartContextProvider";
import { useUserContext } from "../../context/UserContextProvider";
const Navbar = () => {
  const cartItems = useCartItems();
  const user = useUserContext();
  console.log(cartItems);
  return (
    <main>
      <nav className="h-15 bg-appcolor fixed top-0 left-0 text-white text-xl mb-10 z-20 w-full">
        <ul className="max-w-4xl m-auto flex items-center justify-around p-4 gap-x-16">
          <li className="flex-1">
            <div className="text-3xl">
              <Link to="/" className="italic">
                VishCart
              </Link>
            </div>
          </li>

          {user.username ? (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login / Register</Link>
            </li>
          )}
          <li>
            <Link to="/cart">
              <div className="flex relative space-x-3 items-center ml-4">
                <AiOutlineShoppingCart />
                <h1 className="ml-2">Cart</h1>
                <span className="absolute top-[-10px] left-14 text-[15px] flex items-center justify-center h-6 w-6 rounded-full bg-red-500 text-white">
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
};
export default Navbar;
