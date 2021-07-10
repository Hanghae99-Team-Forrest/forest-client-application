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
<<<<<<< HEAD
          <Route path="/" exact component={PostList} />
          <Route path="/write" component={PostWrite} />
=======
          <Route path="/" exact component={TestList} />
          <Route path="/write" component={TestWrite} />
          <Route path="/review" component={TestWrite} />

>>>>>>> 5966af044847764e89856bd35bec04b78cca1b89
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
