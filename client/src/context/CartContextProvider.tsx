import { createContext, useReducer, ReactNode, useContext } from "react";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

type CartContextProps = {
  children: ReactNode;
};

const cartItemsInLocalStorage = localStorage.getItem("vishva-carts");

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
        if (
          book.id === cartItems[i].id &&
          book.category === cartItems[i].category
        ) {
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
            const newItem = { ...cartItems[i] };
            newItem.quantity = cartItems[i].quantity + 1;
            newCartItems.push(newItem);
          } else {
            newCartItems.push(cartItems[i]);
          }
        }

        localStorage.setItem("vishva-carts", JSON.stringify(newCartItems));
        return newCartItems;
      } else {
        localStorage.setItem("vishva-carts", JSON.stringify(cartItems));
        console.log(cartItems);
        return [...cartItems, { ...action.book, quantity: 1 }];
      }
    }
    case "delete_from_cart": {
      localStorage.setItem("vishva-carts", JSON.stringify([]));
      return [];
    }
    case "remove_cart_item": {
      const newItems = [];
      cartItems.forEach((item) => {
        if (item.id === action.id && item.category === action.category) {
        } else {
          newItems.push(item);
        }
      });
      return newItems;
    }
    case "increase_quantity": {
      const newItems = [];
      cartItems.forEach((item) => {
        if (item.id === action.id && item.category === action.category) {
          const book = { ...item };
          book.quantity = item.quantity + 1;
          newItems.push(book);
        } else {
          newItems.push(item);
        }
      });
      return newItems;
    }
    case "decrease_quantity": {
      const newItems = [];
      cartItems.forEach((item) => {
        if (item.id === action.id && item.category === action.category) {
          const book = { ...item };
          book.quantity = item.quantity - 1;
          newItems.push(book);
        } else {
          newItems.push(item);
        }
      });
      return newItems;
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
