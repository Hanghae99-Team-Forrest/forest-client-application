import "./App.css";
import React from "react";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";


import { Grid, Button } from "../elements";
import ReviewWrite from "../pages/ReviewWrite";

function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/review" component={ReviewWrite} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
