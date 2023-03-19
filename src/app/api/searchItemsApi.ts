import axios from "axios";

export const searchItems = axios.create({
  baseURL: "https://api.mercadolibre.com/sites/MLA/search?q=",
});

export const searchItemById = axios.create({
  baseURL: "https://api.mercadolibre.com/items/",
});
