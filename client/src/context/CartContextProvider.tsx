import { createContext, useReducer, ReactNode, useContext } from "react";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

type CartContextProps = {
  children: ReactNode;
};

const cartItemsInLocalStorage = localStorage.getItem("vishva-carts");
console.log(cartItemsInLocalStorage);

let initalCartItems: null | Array<Object>;
if (cartItemsInLocalStorage) {
  initalCartItems = JSON.parse(cartItemsInLocalStorage);
} else {
  initalCartItems = [];
}

const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initalCartItems);

  return (
    <CartContext.Provider value={cartItems}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
export default CartContextProvider;

function cartReducer(cartItems, action) {
  switch (action.type) {
    case "add_to_cart": {
      const book = action.book;
      let itemPresent = false;
      for (let i = 0; i < cartItems.length; i++) {
        if (book.id === cartItems[i].id) {
          itemPresent = true;
          // cartItems[i].quantity = cartItems[i].quantity + 1;
          // console.log(cartItems);
          // return [...cartItems];
        }
      }
      if (itemPresent) {
        const newCartItems = [];
        for (let i = 0; i < cartItems.length; i++) {
          if (book.id === cartItems[i].id) {
            const newItem = cartItems[i];
            newItem.quantity = cartItems[i].quantity + 1;
            newCartItems.push(newItem);
          } else {
            newCartItems.push(cartItems[i]);
          }
        }

        localStorage.setItem("vishva-carts", JSON.stringify(newCartItems));
        return newCartItems;
      }
      localStorage.setItem("vishva-carts", JSON.stringify(cartItems));
      return [...cartItems, { ...action.book, quantity: 1 }];
    }
    case "delete_from_cart": {
      return [...cartItems];
    }
    default: {
      throw new Error("Unknown action");
    }
  }
}

export const useCartItems = () => {
  return useContext(CartContext);
};
export const useCartItemsDispatch = () => {
  return useContext(CartDispatchContext);
};
