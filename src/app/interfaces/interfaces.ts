export interface SearchResult {
  author: Author;
  categories: string[];
  items: Item[];
}

interface Author {
  name: string;
  lastName: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Shipping {
  free_shipping: boolean;
}
interface Address {
  city_name: string;
}
export interface Item {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  condition: string;
  shipping: Shipping;
  currency_id: string;
  category_id: string;
  address: Address;
}

export interface ItemJson {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  city_name: string;
}

export interface ItemById {
  id: string;
  title: string;
  price: number;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface ItemJsonById {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Category[];
}
export interface Category {
  id: string;
  name: string;
  results: number;
}
