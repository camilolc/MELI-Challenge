import React from "react";
//Router
import { Route, Routes, Navigate } from "react-router-dom";
//Components
import { SearchBox, SearchDetails, SearchResults } from "../components";

export const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchBox />}>
          <Route path="items" element={<SearchResults />} />
          <Route path="items/:id" element={<SearchDetails />}></Route>
        </Route>
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
