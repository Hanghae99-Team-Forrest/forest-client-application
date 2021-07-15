import React from "react";

import Detail from "../components/Detail";

import { Grid } from "../elements";

import { useDispatch, useSelector } from "react-redux";

import { actionCreators as testActions } from "../redux/modules/test";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const post_list = useSelector((store) => store.test.t_list);

  const post_idx = post_list.findIndex((p) => p.id === parseInt(id));

  const post = post_list[post_idx];

  React.useEffect(() => {
    if (post) {
      return;
    }
    dispatch(testActions.getPostAX());
  }, []);
  return <Grid>{post && <Detail {...post} />}</Grid>;
};

export default PostDetail;
