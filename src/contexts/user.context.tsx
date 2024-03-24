/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: (value: any) => {},
});

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
