import "./App.css";
import React from "react";
import TestList from "../pages/TestList";
import TestWrite from "../pages/TestWrite";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";


import { Grid, Button } from "../elements";


function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={TestList} />
          <Route path="/write" component={TestWrite} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
