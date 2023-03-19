//Redux
import { Dispatch } from "@reduxjs/toolkit";
//Slices
import { startLoadingSearch, setResults } from "../search/searchSlice";
//Axios
import { searchItems } from "../../../api/searchItemsApi";
//Interfaces
import { Item, ItemJson } from "../../../interfaces/interfaces";

export const getResults = (product = "") => {
  return async (dispatch: Dispatch, getState: number) => {
    dispatch(startLoadingSearch());
    let itemsList: ItemJson[] = [];
    const { data } = await searchItems(`${product}`);
    const { results = [] } = data;

    const orderCategory = (result: []) => {
      const organizer: string[] = [];
      const orderByCategory: Item[] = [];

      result.forEach(({ category_id }) => organizer.push(category_id));

      let catogoryFilter: [] = organizer.reduce((counter: any, key) => {
        counter[key] = 1 + counter[key] || 1;
        return counter;
      }, {});

      let sortedCategory = Object.entries(catogoryFilter).sort(
        (a, b) => b[1] - a[1]
      );

      sortedCategory.map((d) =>
        result.map((e: any) => {
          if (orderByCategory.length < 4) {
            if (d[0] === e.category_id) {
              orderByCategory.push(e);
            }
          } else {
            return;
          }
        })
      );

      return orderByCategory;
    };
    //Parsing JSON
    orderCategory(results).map(
      ({
        id,
        condition,
        shipping: { free_shipping },
        thumbnail: picture,
        price,
        title,
        currency_id,
        address: { city_name },
      }: Item) =>
        itemsList.push({
          id,
          condition,
          free_shipping,
          picture,
          price: {
            amount: price,
            currency: currency_id,
            decimals: Number.isInteger(price)
              ? 0
              : price.toString().split(".")[1].length,
          },
          title,
          city_name,
        })
    );
    //Dispatch Camilo Lopez sing in new Json
    dispatch(
      setResults({
        author: {
          name: "Camilo",
          lastName: "Lopez",
        },
        results: itemsList,
      })
    );
  };
};
