import { Link, Outlet, useNavigate } from "react-router-dom";
import { useCartItems } from "../../context/CartContextProvider";
import { useUserContext } from "../../context/UserContextProvider";
import { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";

import { motion } from "framer-motion";
const Navbar = () => {
  const cartItems = useCartItems();
  const user = useUserContext();
  const [darkTheme, setDarkTheme] = useState(false);
  const [menu, setMenu] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  const navigate = useNavigate();

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
      <nav className="h-[12vh] bg-appcolor sticky top-0 left-0 text-white text-xl z-20  w-full dark:bg-red-20">
        <ul className="h-full mx-auto max-w-lg px-6 sm:max-w-xl lg:max-w-4xl flex items-center justify-around">
          <li className="f">
            <div className="text-3xl">
              <Link to="/" className="italic font-bold">
                VishCart
              </Link>
            </div>
          </li>

          {user.username ? (
            <li className="hidden md:inline">
              <Link to="/logout">Logout</Link>
            </li>
          ) : (
            <li className="hidden md:block">
              <Link to="/login">Login</Link>
            </li>
          )}
          <li>
            <Link to="/cart" className="hidden md:block">
              <div className="flex relative space-x-3 items-center ml-4">
                <AiOutlineShoppingCart />
                <h1 className="ml-2">Cart</h1>
                <span className="absolute top-[-10px] left-14 text-[15px] flex items-center justify-center h-6 w-6 rounded-full bg-red-500 text-white">
                  {cartItems?.length}
                </span>
              </div>
            </Link>
          </li>
          <li className="hidden md:block">
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
          <li className="md:hidden">
            {menu ? (
              <motion.div whileHover={{ scale: 1.2 }}>
                <AiOutlineClose
                  type="button"
                  className="cursor-pointer"
                  onClick={toggleMenu}
                />
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.2 }}>
                <AiOutlineMenu
                  type="button"
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all delay-100"
                />
              </motion.div>
            )}
          </li>

          {menu ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="min-h-[35%] 
            w-[40%] bg-appcolor text-white border  fixed right-0 top-[12vh] transition-all delay-150 z-500 flex flex-col"
            >
              <button
                className="border-b border-dashed border-b-slate-100 py-1 text-sm hover:bg-blue-700"
                onClick={() => {
                  navigate("/category/adventure");
                  toggleMenu();
                }}
              >
                Adventure
              </button>
              <button
                className="border-b border-dashed border-b-slate-100 py-1 text-sm hover:bg-blue-700"
                onClick={() => {
                  navigate("/category/crime");
                  toggleMenu();
                }}
              >
                Crime
              </button>
              <button
                className="border-b border-dashed border-b-slate-100 py-1 text-sm hover:bg-blue-700"
                onClick={() => {
                  navigate("/category/classics");
                  toggleMenu();
                }}
              >
                Classics
              </button>
              <button
                className="border-b border-dashed border-b-slate-100 py-1 text-sm hover:bg-blue-700"
                onClick={() => {
                  navigate("/category/horror");
                  toggleMenu();
                }}
              >
                Horror
              </button>
              <button
                className="border-b border-dashed border-b-slate-100 py-1 text-sm hover:bg-blue-700"
                onClick={() => {
                  navigate("/category/humor");
                  toggleMenu();
                }}
              >
                Humor
              </button>
              <div className="flex h-10 items-center justify-center gap-1 cursor-pointer  relative text-sm border-b border-dashed hover:bg-blue-700">
                <AiOutlineShoppingCart
                  type="button"
                  onClick={() => {
                    navigate("/cart");
                    toggleMenu();
                  }}
                  className="relative"
                />
                Cart
                <span
                  className="flex absolute top-1 h-4
                 w-4 left-[145px] items-center justify-center  rounded-full text-xs bg-red-500 text-white"
                >
                  {cartItems?.length}
                </span>
              </div>

              {user?.username ? (
                <div className="flex items-center justify-center gap-1 hover:bg-blue-700">
                  <AiOutlineLogout />
                  <button
                    onClick={() => {
                      navigate("/logout");
                      toggleMenu();
                    }}
                    className="h-10 text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-1 ">
                  <AiOutlineLogin />
                  <button
                    onClick={() => {
                      navigate("/login");
                      toggleMenu();
                    }}
                    className=" h-20 text-sm"
                  >
                    Login
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            ""
          )}
        </ul>
      </nav>

      <Outlet />
      <footer
        className="w-full h-[12vh] bg-slate-300 flex items-center justify-center font-semibold italic text-slate-700 dark:bg-[#272727] dark:text-[#c7c7c7] 
      "
      >
        <h1>Made with ❤ by Vishnuvardhan Uppunuthula</h1>
      </footer>
    </main>
  );
};
export default Navbar;
