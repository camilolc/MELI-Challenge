import React, { useEffect } from "react";
import { json, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getResultById } from "../store/slices/searchById/thunk";

//Css
import "../styles/searchDetails.css";
import { ItemJsonById } from "../interfaces/interfaces";
//Assets

export const SearchDetails = () => {
  const {
    result: {
      picture,
      condition,
      sold_quantity,
      title,
      price: { amount, decimals },
      description,
    },
    author,
    isLoading,
  } = useSelector((state: RootState) => state.searchById);
  const { id } = useParams();

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getResultById(id!));
  }, []);

  return (
    <div className="search-detail-component">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="search-detail-container">
          <div className="search-detail-box">
            <img className="search-detail-img" src={picture}></img>
            <div className="search-detail-info">
              <span className="search-detail-sold">{`${condition} - ${sold_quantity} vendidos`}</span>
              <h3 className="search-detail-title">{title}</h3>
              <div className="search-detail-pay">
                <h3 className="search-detail-price">
                  {`$${parseInt(String(amount))}`}
                  <span className="search-detail-dec">
                    {decimals == 0 ? "00" : decimals}
                  </span>
                </h3>
              </div>
              <button className="search-detail-button">Comprar</button>
            </div>
          </div>
          <div className="search-detail-desc">
            <h2 className="search-detail-desc-title">
              Descripción del producto
            </h2>
            <p className="search-detail-desc-parr">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
