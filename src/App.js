import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.component.jsx";

import Homepage from "./pages/Homepage.page.jsx";
import JobDetails from "./pages/JobDetails.page.jsx";

import { lightTheme, darkTheme, GlobalStyles } from "./utils/theme.js";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
