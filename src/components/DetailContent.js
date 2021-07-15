import React from "react";
import { actionCreators as imageActions } from "../redux/modules/imageAX";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as testActions } from "../redux/modules/test";
import { Grid, Text, Image, Input, Button } from "../elements";
import { history } from "../redux/configureStore";
const DetailContent = (props) => {
  return (
    <React.Fragment>
      <Grid margin="0 auto" maxWidth="180rem">
        <Grid margin="3rem auto 0" maxWidth="50rem" padding="0 2rem">
          <Grid border="t" margin="1rem auto 3rem" maxWidth="70rem">
            <Image
              shape="rectangle"
              src={props.image}
              size="30rem"
              radius="t"
            ></Image>
          </Grid>
        </Grid>
        <Grid margin="3rem auto 0" maxWidth="50rem" padding="0 2rem 2rem">
          <Grid maxWidth="70rem" margin="0 auto" border>
            <Text bold="t" size="2rem" margin="3rem 0.5rem 1rem">
              카테고리
            </Text>
            <Text size="1.6rem" margin="3rem 0 3rem 1rem">
              {!props.categoryId
                ? "미지정"
                : "" || props.categoryId === 1
                ? "산"
                : "" || props.categoryId === 2
                ? "바다"
                : "" || props.categoryId === 3
                ? "계곡"
                : ""}
            </Text>
          </Grid>
          <Grid maxWidth="70rem" margin="0 auto" border>
            <Grid maxWidth="70rem" margin="0 auto">
              <Text bold="t" size="2rem" margin="3rem 0.5rem 1rem">
                제목
              </Text>
            </Grid>
            <Grid maxWidth="70rem" margin="0 auto">
              <Text size="1.6rem" margin="3rem 0 3rem 1rem">
                {props.title}
              </Text>
            </Grid>
          </Grid>
          <Grid maxWidth="70rem" margin="0 auto" border>
            <Text bold="t" size="2rem" margin="3rem 0.5rem 1rem">
              리뷰
            </Text>
            <Text size="1.6rem" margin="3rem 0 3rem 1rem">
              {props.content}
            </Text>
          </Grid>
          <Grid maxWidth="70rem" margin="0 auto" border>
            <Text bold="t" size="2rem" margin="3rem 0.5rem 1rem">
              작성자
            </Text>
            <Text size="1.6rem" margin="3rem 0 3rem 1rem">
              {props.userName}
            </Text>
          </Grid>
          <Grid flex>
            <Button
              height="5rem"
              bg="#78e08f"
              shadow
              cursor="t"
              radius="0.05rem"
              border="0.05rem solid white"
              _onClick={() => {
                const pw_check = prompt("게시글 작성 시 입력한 비밀번호를 입력하세요.");
                if (pw_check === props.postPassword) {
                  history.push(`/review/${props.id}`);
                } else {
                  alert("비밀번호를 확인해주세요.");
                }
              }}
            >
              <Text is_main>수정하기</Text>
            </Button>
            <Button
              height="5rem"
              bg="#78e08f"
              shadow
              cursor="t"
              radius="0.05rem "
              border="0.05rem solid white"
            >
              <Text is_main>삭제하기</Text>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DetailContent;
