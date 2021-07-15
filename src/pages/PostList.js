import React from "react";
import styled from "styled-components";

import forest from "../shared/img/forest2.jpeg";
import Post from "../components/Post";
import { Grid, Image, Text, Input, Button } from "../elements";
import BorderColorIcon from "@material-ui/icons/BorderColor";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as testActions } from "../redux/modules/test";

const PostList = (props) => {
  const dispatch = useDispatch();
  const test_post = useSelector((state) => state.test.t_list);

  const [ctrNum, setCtrNum] = React.useState(0);

  const changeCtrNum = (id) => {
    setCtrNum(id);
  };
  React.useEffect(() => {
    if (test_post.length === 0) {
      dispatch(testActions.getPostAX());
    }
  }, []);

  return (
    <Grid>
      <div
        style={{
          backgroundImage: `url(${forest})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Grid maxWidth="120rem" margin="0 auto" padding="20rem 0">
          <MainDiv
            height="20rem"
            margin="0 auto"
            fontSize="6rem"
            fontWeight="600"
          >
            Fᴏʀ、Rᴇꜱᴛ
          </MainDiv>
          <Grid post_flex="t" margin="auto">
            <MainDiv height="10rem" margin="0" fontSize="4rem">
              Wʜᴇʀᴇᴠᴇʀ ʏᴏᴜ ᴅᴇꜱɪʀᴇ,
            </MainDiv>
            <MainDiv height="10rem" margin="0 0 0 2rem" fontSize="4rem">
              Yᴏᴜ ᴄᴀɴ ɢᴇᴛ ᴛʜᴇʀᴇ.
            </MainDiv>
          </Grid>
        </Grid>
      </div>

      <Grid padding="0" maxWidth="100rem" margin="0px auto">
        <Grid padding='0 3rem'>
          <Text size="2rem" color="#212121" bold="t" width="15rem">
            카테고리
          </Text>
        </Grid>
        <Grid is_flex maxWidth="100%" margin="0 10rem 0 0">
          <Grid flex maxWidth="30%">
            <Grid is_flex width="36rem" padding='0 0 0 1rem'>
              <Button
                ctg
                width="6.8rem"
                bg="#78e08f"
                radius="0.5rem"
                shadow
                cursor="t"
                margin='0 0.4rem'
                _onClick={() => {
                  changeCtrNum(0);
                }}
              >
                <Text is_main='t' >#전체</Text>
              </Button>
              <Button
                ctg
                width="6.8rem"
                bg="#78e08f"
                radius="0.5rem"
                shadow
                cursor="t"
                margin='0 0.4rem'
                _onClick={() => {
                  changeCtrNum(1);
                }}
              >
                <Text is_main>#산</Text>
              </Button>
              <Button
                ctg
                width="6.8rem"
                bg="#78e08f"
                radius="0.5rem"
                shadow
                cursor="t"
                margin='0 0.4rem'
                _onClick={() => {
                  changeCtrNum(2);
                }}
              >
                <Text is_main>#바다</Text>
              </Button>
              <Button
                ctg
                width="6.8rem"
                bg="#78e08f"
                radius="0.5rem"
                shadow
                cursor="t"
                margin='0 0.4rem'
                _onClick={() => {
                  changeCtrNum(3);
                }}
              >
                <Text is_main>#계곡</Text>
              </Button>
            </Grid>
          </Grid>

          <Grid is_flex maxWidth="13rem" margin="0 2rem 0 0">
            <Button
              width="3rem"
              height="3rem"
              margin="2rem 0 0 0"
              padding="0"
              radius="0.8rem"
              color="#57606f"
              bg="transparent"
              _onClick={() => {
                history.push(`/review`);
              }}
              cursor="true"
            >
              <BorderColorIcon style={{ fontSize: "2.5rem" }} />
            </Button>
            <Text
              margin="3rem 0 2rem 0"
              size="2rem"
              color="#212121"
              bold
              _onClick={() => {
                history.push("/review");
              }}
              cursor="true"
            >
              게시글 작성
            </Text>
          </Grid>
        </Grid>
        <hr style={{ color: "gray", size: "0.1rem" }} />

        <Grid card_flex wrap="true" padding="3.6rem">
          {ctrNum === 0
            ? test_post.map((p, idx) => {
                return <Post key={p.id} {...p} />;
              })
            : ""}
          {ctrNum === 1
            ? test_post.map((p, idx) => {
                if (p.categoryId === 1) {
                  return <Post key={p.id} {...p} />;
                }
                return null;
              })
            : ""}
          {ctrNum === 2
            ? test_post.map((p, idx) => {
                if (p.categoryId === 2) {
                  return <Post key={p.id} {...p} />;
                }
                return null;
              })
            : ""}
          {ctrNum === 3
            ? test_post.map((p, idx) => {
                if (p.categoryId === 3) {
                  return <Post key={p.id} {...p} />;
                }
                return null;
              })
            : ""}
        </Grid>
      </Grid>
    </Grid>
  );
};

PostList.defaultProps = {
  margin: false,
  width: "100%",
  height: "100%",
  fontSize: "4.5rem",
  fontWeight: "",
  ani: false,
  ani2: false,
};

const MainDiv = styled.div`
  color: ghostwhite;
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
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
