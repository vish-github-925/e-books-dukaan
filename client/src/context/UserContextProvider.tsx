import { createContext, ReactNode, useContext, useReducer } from "react";

export const userInLocalStorage = localStorage.getItem("vishva-dukaan-user");

let initialUser: null | Object;
if (userInLocalStorage) {
  initialUser = JSON.parse(userInLocalStorage);
} else {
  initialUser = {};
}

export const UserContext = createContext(null);
export const UserContextDispatch = createContext(null);

export function useUserContext() {
  return useContext(UserContext);
}
export function useUserContextDispatch() {
  return useContext(UserContextDispatch);
}

type UserContextProps = {
  children: ReactNode;
};
const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, dispatch] = useReducer(userReducerFunction, initialUser);
  return (
    <UserContext.Provider value={user}>
      <UserContextDispatch.Provider value={dispatch}>
        {children}
      </UserContextDispatch.Provider>
    </UserContext.Provider>
  );
};
export default UserContextProvider;

function userReducerFunction(user, action) {
  switch (action.type) {
    case "login_or_register": {
      user.email = action.email;
      user.id = action.id;
      user.username = action.username;
      console.log(user);
      localStorage.setItem("vishva-dukaan-user", JSON.stringify(user));
      return { ...user };
    }
    case "logout": {
      user = {};
      localStorage.setItem("vishva-dukaan-user", JSON.stringify(user));
      return { ...user };
    }
    default: {
      throw new Error("Unknown dispatch function");
    }
  }
}
