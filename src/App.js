import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CalendarContainer from "./components/Calendar/CalendarContainer";
import ListContainer from "./components/List/ListContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CalendarContainer />
        </Route>
        <Route path="/list">
          <ListContainer />
        </Route>
        <Route path="*">
          <div>Path error: 404</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
