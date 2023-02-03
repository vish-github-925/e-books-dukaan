import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartItems } from "../../context/CartContextProvider";
const Navbar = () => {
  const cartItems = useCartItems();
  console.log(cartItems);
  return (
    <main>
      <nav className="h-15 bg-appcolor sticky top-0 left-0 text-white text-xl mb-4">
        <ul className="max-w-4xl m-auto flex items-center justify-around p-4">
          <li>
            <div className="text-3xl">
              <Link to="/">Logo</Link>
            </div>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="flex space-x-3 items-center">
                <AiOutlineShoppingCart />
                <h1 className="ml-2">Cart</h1>
                {cartItems.length}
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
