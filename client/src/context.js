import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "http://localhost:4000/api/v1/products?name=";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchForm, setSearchForm] = useState("a");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchForm}`);
      const data = await res.json();
      if (data) {
        setProducts(data.products);
        setLoading(false);
      } else {
        setProducts([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchForm]);

  useEffect(() => {
    fetchData();
  }, [searchForm, fetchData]);

  return (
    <AppContext.Provider
      value={{
        products,
        setSearchForm,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
