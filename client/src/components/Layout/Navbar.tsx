import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartItems } from "../../context/CartContextProvider";
import { useUserContext } from "../../context/UserContextProvider";
import { useEffect, useState } from "react";
const Navbar = () => {
  const cartItems = useCartItems();
  const user = useUserContext();
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
      document.body.classList.add("dark:bg-[#191919]");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);
  return (
    <main className="dark:bg-[#191919] dark:text-[#c7c7c7]">
      <nav className="h-15 bg-appcolor fixed top-0 left-0 text-white text-xl  z-20 w-full dark:bg-red-20">
        <ul className="max-w-4xl m-auto flex items-center justify-around p-4 gap-x-16 ">
          <li className="flex-1">
            <div className="text-3xl">
              <Link to="/" className="italic font-bold">
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
                  {cartItems?.length}
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="bg-orange-300 rounded-lg py-1 px-2 flex items-center justify-center hover:cursor-pointer text-sm hover:bg-orange-400 text-slate-900 hover:text-white"
            >
              Buy
            </Link>
          </li>
          <li className="bg-red-50 w-8 h-5 rounded-xl flex justify-start dark:justify-end transition ease-in delay-150 dark:bg-[#272727]">
            <button
              onClick={toggleTheme}
              className="h-5 w-5 bg-black rounded-full dark:self-end dark:bg-white"
            ></button>
          </li>
        </ul>
      </nav>

      <Outlet />
      <footer
        className="w-full bg-slate-300 h-20 flex items-center justify-center font-semibold italic text-slate-700 dark:bg-[#272727] dark:text-[#c7c7c7] 
      "
      >
        <h1>Made with ❤ by Vishnuvardhan Uppunuthula</h1>
      </footer>
    </main>
  );
};
export default Navbar;
