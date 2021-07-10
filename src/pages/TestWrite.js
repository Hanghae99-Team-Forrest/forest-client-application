import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const TestWrite = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostAX(title, contents));
  };
  return (
    <React.Fragment>
      <Div>
        <div style={{ margin: "1.2em 0em" }}>
          <h4 style={{ margin: "0px" }}>제목</h4>
          <input value={title} onChange={changeTitle} placeholder="제목" />
        </div>
        <div style={{ margin: "1.2em 0em" }}>
          <h4 style={{ margin: "0px" }}>내용</h4>
          <input
            value={contents}
            onChange={changeContents}
            placeholder="게시글 내용"
          />
        </div>
        <button onClick={addPost}>제출</button>
      </Div>
    </React.Fragment>
  );
};

TestWrite.defaultProps = {};

const Div = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 17em;
  height: auto;
  margin: 0px auto;
  background-color: cadetblue;
  flex-direction: column;
`;
export default TestWrite;
