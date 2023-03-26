import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { DataReducer, intialState } from "../Reducer/DataReducer";

const dataContext = createContext();
export const useData = () => useContext(dataContext);
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, intialState);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const { data } = await axios.get(url);
        dispatch({
          type: "INTIALIZE_PRODUCTS",
          payload: data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData("https://fakestoreapi.com/products");
  }, []);
  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
};
