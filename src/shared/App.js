import "./App.css";
import React from "react";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";


import { Grid, Button } from "../elements";
import ReviewWrite from "../pages/ReviewWrite";

function App() {
  const dispatch = useDispatch();


  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/review" exact component={ReviewWrite} />
          <Route path="/review/:id" exact component={ReviewWrite} />
          <Route path="/post/:id" exact component={PostDetail}/>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
