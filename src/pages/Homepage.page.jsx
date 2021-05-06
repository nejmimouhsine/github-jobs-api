import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setJobs } from "../features/jobs/jobsSlice";

import SearchBar from "../components/SearchBar.component.jsx";
import JobsList from "../components/JobsList.component.jsx";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://jobs.github.com/positions.json?page=1&search=node"
      )}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        dispatch(
          setJobs({
            jobs: JSON.parse(data.contents),
          })
        );
      })
      .catch((error) => console.error(error));
  });

  return (
    <>
      <SearchBar />
      <JobsList />
    </>
  );
};

export default Homepage;
