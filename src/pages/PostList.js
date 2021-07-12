import React from "react";
import styled from "styled-components";
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
      <Grid position="relative">
        <Image shape="main" src={forest} style={{ position: "absolute" }} />
        <Grid position="absolute" top="0" left="0" right="0">
          <Grid minWidth="50rem" maxHeight="16rem" margin="13rem auto">
            <MainDiv width="100rem" height="20rem" margin="0 auto" ani>
              Fᴏʀ、Rᴇꜱᴛ
            </MainDiv>
            <MainDiv width="100rem" height="10rem" margin="0 auto" ani2>
              Wʜᴇʀᴇᴠᴇʀ ʏᴏᴜ ᴅᴇꜱɪʀᴇ, Yᴏᴜ ᴄᴀɴ ɢᴇᴛ ᴛʜᴇʀᴇ.
            </MainDiv>
          </Grid>
        </Grid>
      </Grid>

      <Grid padding="0px" maxWidth="100rem" margin="0rem auto 8rem auto">
        <Text size="2rem" color="#212121" bold>
          카테고리
        </Text>
        <Grid is_flex width="28rem">
          <Button width="8rem" bg="#78e08f" radius="0.5rem" shadow>
            <Text is_main>#산</Text>
          </Button>
          <Button width="8rem" bg="#78e08f" radius="0.5rem" shadow>
            <Text is_main>#계곡</Text>
          </Button>
          <Button width="8rem" bg="#78e08f" radius="0.5rem" shadow>
            <Text is_main>#바다</Text>
          </Button>
        </Grid>
      </Grid>

      <Grid padding="0px" maxWidth="100rem" margin="0px auto">
        <Grid is_flex maxWidth="28rem" margin="0 10rem 0 0">
          <Button bg="white" width="7rem" padding="0">
            <Text size="2rem" color="#212121" bold>
              최신순
            </Text>
          </Button>
          <Button bg="white" padding="0 6rem 0 0">
            <Text size="2rem" color="#212121" bold>
              인기순
            </Text>
          </Button>
        </Grid>
        <hr style={{color: "gray", size:"0.1rem", margin: "0 0 7rem 0"}}/>
        <Grid height="70rem">
          <Grid>
            포스트 사진
            <Grid width="20rem" height="24rem" bg="yellowgreen">
              
            </Grid>
            <Grid width="14rem" height="5rem" bg="gray">
              제목
            </Grid>
            <Grid width="7rem" height="5rem" bg="gray">
              프로필 이미지
            </Grid>
            <Grid width="7rem" height="5rem" bg="gray">
              by 작성자
            </Grid>
            <Grid width="7rem" height="5rem" bg="gray">
              좋아요 0개
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
PostList.defaultProps = {
  margin: false,
  width: "100%",
  height: "100%",
  ani: false,
  ani2: false,
};

const MainDiv = styled.div`
  color: ghostwhite;
  font-size: 4.5rem;
  font-weight: 400;
  display: flex;
  /* width: 100%; */
  /* height: 100%; */
  justify-content: center;
  align-items: center;
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  animation: fadein 4s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 4s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    30% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
    }
    70% {
      opacity: 0.7;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default PostList;
