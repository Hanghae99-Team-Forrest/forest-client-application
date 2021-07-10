import React from "react";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/test";
import forest from "../shared/img/forest2.jpeg";

import { Grid, Image, Text, Input, Button } from "../elements";

const PostList = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(postActions.getPostAX());
  });
  return (
    <Grid>
      <Grid is_main>
        <Image shape="main" src={forest}/>
        <Grid padding="18.6rem 8rem 4rem">
            안녕하세요
        </Grid>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

PostList.defaultProps = {};

export default PostList;
