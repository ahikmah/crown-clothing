/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect } from "react";

import {
  checkUserAuthentication,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: (_: any) => {},
});

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = checkUserAuthentication((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
