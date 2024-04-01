import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// --------------------------------------------------------------------------------

export const CategoriesContext = createContext({
  categoriesMap: {} as any,
});

// --------------------------------------------------------------------------------

export const CategoriesProvider = ({ children }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const result = await getCategoriesAndDocuments();
      setCategoriesMap(result);
    };
    getCategoriesMap();
  }, []);

  const value = {
    categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
