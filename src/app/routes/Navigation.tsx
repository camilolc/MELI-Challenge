import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SearchBox, SearchDetails, SearchResults } from "../components";

export const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchBox />}>
          <Route path="items" element={<SearchResults />} />
          <Route path="items/:id" element={<SearchDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
};
