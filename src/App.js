import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setJobs } from "./features/jobs/jobsSlice";

import Header from "./components/Header.component.jsx";

import Homepage from "./pages/Homepage.page.jsx";
import JobDetails from "./pages/JobDetails.page.jsx";

import { lightTheme, darkTheme, GlobalStyles } from "./utils/theme.js";

const App = () => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <Header themeToggler={themeToggler} />
          <Switch>
            <Route exact path="/">
              <Homepage themeToggler={themeToggler} />
            </Route>
            <Route path="/details/:jobId">
              <JobDetails />
            </Route>
          </Switch>
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
};

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default App;
