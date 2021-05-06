import React from "react";

import SearchBar from "../components/SearchBar.component.jsx";
import JobsList from "../components/JobsList.component.jsx";

const Homepage = () => {
  return (
    <>
      <SearchBar />
      <JobsList />
    </>
  );
};

export default Homepage;
