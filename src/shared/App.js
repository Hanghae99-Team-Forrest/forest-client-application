import "./App.css";
import React from "react";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";


import { Grid } from "../elements";
import ReviewWrite from "../pages/ReviewWrite";

function App() {

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
