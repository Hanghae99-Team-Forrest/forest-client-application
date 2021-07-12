import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as testActions } from "../redux/modules/test";
import { Grid, Text, Image, Input, Button } from "../elements";

const ReviewContents = (props) => {
  const dispatch = useDispatch();

  const fileInput = React.useRef();
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");
  const [nick, setNick] = React.useState("");

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

  // 리뷰 저장
  const addReview = () => {
    dispatch(testActions.addPostAX(title, contents))
    console.log(title, contents, nick);
  };

  // 선택한 파일 정보
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result);
        // dispatch(imageActions.setPreview(reader.result));
      };
    }
  };

  if (props.shape === "no_flex") {
    return (
      <React.Fragment>
        <Grid margin="0 auto" maxWidth="40rem">
          <Grid margin="2rem auto 0">
            <Text bold="t" size="1.6rem" margin="0 auto 1rem" width="35rem">
              이미지
            </Text>
            <Grid is_flex margin="0 auto" maxWidth="35rem">
              <input
                type="file"
                onChange={selectFile}
                ref={fileInput}
                // disabled={uploading}
              ></input>
            </Grid>
            <Text bold="t" size="1.6rem" margin="2rem auto 1rem" width="35rem">
              Preview
            </Text>
            <Grid border="t" margin="1rem auto 3rem" maxWidth="35rem">
              <Grid margin="0 auto" maxWidth="35rem">
                <Grid padding="0 1.6rem">
                  <Text size="1.6rem">{props.contents}</Text>
                </Grid>

                <Image shape="rectangle" src={props.src}></Image>
              </Grid>
            </Grid>
          </Grid>

          <Grid width="100%" margin="0 auto 0">
            <Grid maxWidth="35rem" margin="0 auto">
              <Text bold="t" size="1.6rem" margin="0 0.5rem 1rem">
                리뷰 제목
              </Text>
              <Input
                value={title}
                _onChange={changeTitle}
                placeholder="제목을 입력해주세요."
              ></Input>
            </Grid>
            <Grid maxWidth="35rem" margin="0 auto">
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

            <Grid maxWidth="35rem" margin="0 auto">
              <Text bold="t" size="1.6rem" margin="3rem 0.5rem 1rem">
                닉네임
              </Text>
              <Input
                value={nick}
                _onChange={changeNick}
                placeholder="닉네임을 입력하세요"
              ></Input>
            </Grid>

            <Grid maxWidth="35rem" margin="0 auto">
              <Button
                margin="3rem auto 2rem 0"
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
  }
  return (
    <React.Fragment>
      <Grid is_flex="t" margin="0 auto" maxWidth="140rem">
        <Grid margin="2rem 2rem 0">
          <Text bold="t" size="1.6rem" margin="0 auto 1rem" width="40rem">
            이미지
          </Text>
          <Grid is_flex margin="0 auto" maxWidth="40rem">
            <input
              type="file"
              onChange={selectFile}
              ref={fileInput}
              // disabled={uploading}
            ></input>
          </Grid>
          <Text bold="t" size="1.6rem" margin="2rem auto 1rem" width="40rem">
            Preview
          </Text>
          <Grid border="t" margin="1rem auto 3rem" maxWidth="40rem">
            <Grid margin="0 auto" maxWidth="40rem">
              <Grid padding="0 1.6rem">
                <Text size="1.6rem">{props.contents}</Text>
              </Grid>

              <Image shape="rectangle" src={props.src}></Image>
            </Grid>
          </Grid>
        </Grid>

        <Grid width="100%" margin="0 2rem 0">
          <Grid maxWidth="40rem" margin="0 auto">
            <Text bold="t" size="1.6rem" margin="0 0.5rem 1rem">
              리뷰 제목
            </Text>
            <Input
              value={title}
              _onChange={changeTitle}
              placeholder="제목을 입력해주세요."
            ></Input>
          </Grid>
          <Grid maxWidth="40rem" margin="0 auto">
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

          <Grid maxWidth="40rem" margin="0 auto">
            <Text bold="t" size="1.6rem" margin="3rem 0.5rem 1rem">
              닉네임
            </Text>
            <Input
              value={nick}
              _onChange={changeNick}
              placeholder="닉네임을 입력하세요"
            ></Input>
          </Grid>

          <Grid maxWidth="40rem" margin="0 auto">
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

ReviewContents.defaultProps = {
  src: "https://cdn.pixabay.com/photo/2016/11/30/18/14/download-1873539_1280.png",
  contents: "샘플 텍스트입니다.",
};

export default ReviewContents;
