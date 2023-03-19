import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ItemJson } from "../interfaces/interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import { getResults } from "../store/slices/search/thunk";
//Css
import "../styles/searchResult.css";

//Assets
import Shipping from "../../assets/ic_shipping.png";

export const SearchResults = () => {
  const { results, isLoading, author } = useSelector(
    (state: RootState) => state.search
  );
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const query = new URLSearchParams(useLocation().search);
  const productName = query.get("search");

  const itemDetail = (id: string) => {
    navigate(`${id}`);
  };

  if (results.length == 0 && Object.keys(author).length === 0) {
    dispatch(getResults(productName ? productName : ""));
  }

  return (
    <>
      <div className="search-result-component">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="search-result-container">
            <ul>
              {results.map(
                ({
                  id,
                  picture,
                  free_shipping,
                  price,
                  title,
                  condition,
                  city_name,
                }) => (
                  <li key={id}>
                    <div className="search-result-box">
                      <img
                        src={picture}
                        onClick={() => itemDetail(id)}
                        className="search-result-img"
                      />
                      <div className="search-result-info">
                        <div className="search-result-price">
                          <span>{`$ ${price.amount}`}</span>
                          {free_shipping && (
                            <img
                              src={Shipping}
                              className="search-result-icon"
                            ></img>
                          )}
                        </div>
                        <span className="search-result-font-Title">
                          {title}
                        </span>
                        <span className="search-result-font-Title">
                          {condition}
                        </span>
                      </div>
                      <span className="search-result-city">{city_name}</span>
                    </div>
                    <hr className="search-result-separator"></hr>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
