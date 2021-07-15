import React from "react";
import styled from "styled-components";

import { Grid, Image, Text } from "../elements";
import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="26rem"
        height="40rem"
        margin="0 2rem 5rem 2rem"
        radius="true"
        border
        shadow
      >
        <Image
          shape="rectangle"
          src={props.image}
          cursor="t"
          _onClick={() => {
            history.push(`/post/${props.id}`);
          }}
        />
        <Grid is_flex height="4rem" padding="0 0.5rem 0 0.7rem">
          <Text size="2rem" margin="0 0 0 1rem" bold>
            {props.title}
          </Text>
        </Grid>
        <Div>
          <Grid margin="1rem 1rem 2rem">
            <Text size="2rem" margin="0 0 0 1rem" bold>
              {props.content}
            </Text>
          </Grid>
        </Div>
        <Grid flex width="auto" height="5rem" margin="0 0 0 1rem">
          <Image
            shape="circle"
            src="https://image.flaticon.com/icons/png/512/1177/1177568.png"
          />
          <Text bold>{props.userName}</Text>
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
  like_cnt: 0,
  comment_cnt: 0,
  insert_dt: "2021-02-27 10:00:00",
  is_me: true,
};

const Div = styled.div`
  height: 10rem;
  padding: 0 1rem 0 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Post;
