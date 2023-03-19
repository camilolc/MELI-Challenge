//Redux
import { Dispatch } from "@reduxjs/toolkit";
//Slices
import { startLoadingSearch, setResults } from "../searchById/searchByIdSlice";
//Interfaces
import { ItemJsonById } from "../../../interfaces/interfaces";
//Axios
import { searchItemById } from "../../../api/searchItemsApi";

export const getResultById = (idProduct = "") => {
  return async (dispatch: Dispatch, getState: number) => {
    dispatch(startLoadingSearch());
    const {
      data: {
        id,
        title,
        price,
        currency_id,
        thumbnail: picture,
        condition,
        shipping: { free_shipping },
        sold_quantity,
      },
    } = await searchItemById(`${idProduct}`);
    const {
      data: { plain_text },
    } = await searchItemById(`${idProduct}/description`);

    const item: ItemJsonById = {
      id,
      title,
      price: {
        amount: price,
        currency: currency_id,
        decimals: Number.isInteger(price) ? 0 : price.toString().split(".")[1],
      },
      condition,
      picture,
      description: plain_text,
      free_shipping,
      sold_quantity,
    };
    dispatch(
      setResults({
        result: item,
      })
    );
  };
};
