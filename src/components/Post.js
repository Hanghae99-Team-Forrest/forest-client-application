import React from "react";
import styled from "styled-components";

import { Grid, Image, Text, Button } from "../elements";
import heart_gray from "../shared/img/heart_gray.png";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as testActions } from "../redux/modules/test";

const Post = (props) => {

  return (
    <React.Fragment>
      <Grid
        width="26rem"
        height="40rem"
        margin="0 0 5rem 0"
        radius="true"
        shadow
      >
        <Image shape="rectangle" src={props.image} />
        <Grid is_flex height="5rem" padding="0 0.5rem 0 0.7rem">
          <Text size="2rem" margin="0 0 0 1rem" bold>
            {props.title}
          </Text>
          <div>
            {props.is_me && (
              <Button
                width="auto"
                height="3rem"
                margin="0.4rem"
                padding="0.4rem"
                radius="0.5rem"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                <EditIcon />
              </Button>
            )}
            {props.is_me && (
              <Button
                width="auto"
                height="3rem"
                margin="0.4rem"
                padding="0.4rem"
                radius="0.5rem"
                _onClick={() => {
                  // history.push(`/write/${props.id}`);
                }}
              >
                <DeleteForeverIcon />
              </Button>
            )}
          </div>
        </Grid>
        <Grid flex width="auto" height="5rem" margin="0 0 0 1rem">
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
        </Grid>
        <Grid flex padding="1rem 1.6rem 0 1.6rem" width="auto" height="5rem">
          <Heart icon_url={heart_gray} />
          <Text
            margin="0px"
            bold
            width="5rem"
            height="4rem"
            padding="0.5rem 0 0 1rem"
          >
            {props.like_cnt}
          </Text>
        </Grid>
        <Grid padding="1rem 1.6rem 0 1.6rem" height="auto">
          <Text margin="0 0 0 0.5rem" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "frankie",
    user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  },
  image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  title: "제목",
  contents: "고양이네요!",
  like_cnt: 5,
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: true,
};

const Heart = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  background: url(${(props) => props.icon_url});
  background-size: cover;
  cursor: pointer;
`;
export default Post;
