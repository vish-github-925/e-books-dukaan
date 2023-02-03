import { createContext, useReducer, ReactNode, useContext } from "react";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

type CartContextProps = {
  children: ReactNode;
};

const initalCartItems = [];

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
      for (let i = 0; i < cartItems.length; i++) {
        if (book.id === cartItems[i].id) {
          cartItems[i].quantity = cartItems[i].quantity + 1;
          return [...cartItems];
        }
      }
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
