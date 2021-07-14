import React from "react";
import { actionCreators as imageActions } from "../redux/modules/imageAX";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as testActions } from "../redux/modules/test";
import { Grid, Text, Image, Input, Button } from "../elements";

const ReviewContents = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const category = useSelector((state) => state.image.category);
  const is_public = useSelector((sate) => sate.image.public);
  const score = useSelector((sate) => sate.image.score);

  const fileInput = React.useRef();
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [post_pw, setPostPw] = React.useState("");
  const [image, setImage] = React.useState("");

  // 리뷰 제목
  const changeTitle = (e) => {
    setTitle(e.target.value);
    //   console.log(title);
  };

  // 리뷰 내용
  const changeContents = (e) => {
    setContents(e.target.value);
    // console.log(contents);
  };

  // 닉네임
  const changeNick = (e) => {
    setNick(e.target.value);
    //   console.log(nick);
  };

  // 게시글 비번
  const changePostPw = (e) => {
    setPostPw(e.target.value);
    //   console.log(nick);
  };

  // 선택한 파일 정보
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    setImage(file);
    console.log(file);
    if (file) {
      console.log(e);
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result);
        dispatch(imageActions.setPreview(reader.result));
      };
    }
  };

  // 리뷰 저장
  const addReview = () => {
    let post = {
      title: title,
      content: contents,
      image: image,
      category: category,
      public: is_public,
      score: score,
      userName: nick,
      postPassword: post_pw,
    };
    dispatch(testActions.addPostAX(post));
    console.log(typeof image);
    console.log(post);
  };

  return (
    <React.Fragment>
      <Grid review_flex="t" margin="0 auto" maxWidth="180rem">
        <Grid margin="3rem auto 0" maxWidth="50rem" padding="0 2rem">
          <Grid is_flex margin="0 auto" maxWidth="70rem">
            <Text bold="t" size="1.6rem" margin="0 auto 1rem" width="20rem">
              이미지
            </Text>
            <Grid></Grid>
          </Grid>
          <Grid is_flex margin="0 auto" maxWidth="70rem">
            <input
              type="file"
              onChange={selectFile}
              ref={fileInput}
              // disabled={uploading}
            ></input>
          </Grid>
          <Grid is_flex margin="0 auto" maxWidth="70rem">
            <Text bold="t" size="1.6rem" margin="2rem auto 0" width="20rem">
              Preview
            </Text>
            <Grid></Grid>
          </Grid>
          <Grid border="t" margin="1rem auto 3rem" maxWidth="70rem">
            <Image
              shape="rectangle"
              src={
                preview
                  ? preview
                  : "https://www.mercurynews.com/wp-content/uploads/2021/04/SJM-L-ROADTRIP-0502-01.jpg?w=1024"
              }
              size="30rem"
              radius="t"
            ></Image>
          </Grid>
        </Grid>
        <Grid margin="3rem auto 0" maxWidth="50rem" padding="0 2rem 2rem">
          <Grid maxWidth="70rem" margin="0 auto">
            <Text bold="t" size="1.6rem" margin="0 0.5rem 1rem">
              리뷰 제목
            </Text>
            <Input
              value={title}
              _onChange={changeTitle}
              placeholder="제목을 입력해주세요."
            ></Input>
          </Grid>
          <Grid maxWidth="70rem" margin="0 auto">
            <Text bold="t" size="1.6rem" margin="3rem 0.5rem 1rem">
              리뷰 작성
            </Text>
            <Input
              value={contents}
              _onChange={changeContents}
              placeholder="휴양지 리뷰를 작성해주세요"
              multiLine="true"
            ></Input>
          </Grid>
          <Grid is_flex="t">
            <Grid maxWidth="70rem" margin="0 3rem auto 0">
              <Text bold="t" size="1.6rem" margin="3rem 0.5rem 1rem">
                닉네임
              </Text>
              <Input
                value={nick}
                _onChange={changeNick}
                placeholder="닉네임을 입력하세요"
              ></Input>
            </Grid>
            <Grid maxWidth="70rem" margin="0 auto">
              <Text bold="t" size="1.6rem" margin="3rem 0.5rem 1rem">
                비밀번호
              </Text>
              <Input
                value={post_pw}
                _onChange={changePostPw}
                placeholder="게시글 비밀번호"
              ></Input>
            </Grid>
          </Grid>

          <Grid maxWidth="70rem" margin="0 auto 2rem">
            <Button
              margin="3rem auto 0 0"
              _onClick={addReview}
              bg="#4cd137"
              radius="0.4rem"
              height="4rem"
            >
              <Text color="white" margin="0" bold="t" size="1.6rem">
                업로드
              </Text>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ReviewContents;
