import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configureStore";

const SET_TEST = "SET_TEST";
const ADD_TEST = "ADD_TEST";
const EDIT_TEST = "EDIT_TEST";
const DELETE_TEST = "DELETE_TEST";

const setTest = createAction(SET_TEST, (post_list) => ({ post_list }));
const addTest = createAction(ADD_TEST, (test) => ({ test }));
const editTest = createAction(EDIT_TEST, (post_id, post) => ({
  post_id,
  post,
}));
const deleteTest = createAction(DELETE_TEST, (id) => ({ id }));

const initialState = {
  t_list: [],
  list: [{ id: 0, title: "title" }],
};

const addPostAX = (post) => {
  return function (dispatch, getState, { history }) {
    // now upload
    const headers = {
      // "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    let form = new FormData();
    form.append("multipartFile", post.image);
    form.append("title", post.title);
    form.append("content", post.content);
    form.append("categoryId", post.category);
    form.append("userName", post.userName);
    form.append("postPassword", post.postPassword);

    axios
      .post(
        // "http://696d7acce5a2.ngrok.io/api/posts",
        //   .post(
        "http://localhost:4000/post",
        {
          title: post.title,
          multipartFile: post.image,
          content: post.content,
          categoryId: post.category,
          userName: post.userName,
          postPassword: post.postPassword,
        }
        // form
        // { headers: headers }
      )
      .then(function (res) {
        console.log(res);
        console.log(res.data);
        // const posts = {
        //   title: res.data.title,
        //   content: res.data.content,
        //   id: res.data.postId,
        //   image: res.data.imgUrl,
        //   categoryId: res.data.categoryId,
        //   is_open: res.data.is_open,
        //   score: res.data.score,
        //   userName: res.data.userName,
        //   postPassword: res.data.password,
        // };
        const posts = {
          title: res.data.title,
          content: res.data.content,
          id: res.data.id,
          // image: res.data.imgUrl,
          image: res.data.image,
          categoryId: res.data.categoryId,
          userName: res.data.userName,
          // postPassword: res.data.password,
          postPassword: res.data.postPassword,
        };
        dispatch(addTest(posts));
        window.alert("게시글 작성 완료!");
        history.replace("/");
        // window.location.replace('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getPostAX = () => {
  return function (dispatch, getState, { history }) {
    const _post = getState().test.t_list;

    const headers = {
      "Content-Type": `application/json`,
      // "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .get("http://localhost:4000/post")
      .then((res) => {
        console.log(res);
        let post_list = [];
        res.data.forEach((_post) => {
          // let post = {
          //   id: _post.postId,
          //   title: _post.title,
          //   image: _post.imgUrl,
          //   content: _post.content,
          //   categoryId: _post.categoryId,
          //   userName: _post.userName,
          //   postPassword: _post.password,
          // };
          let post = {
            title: _post.title,
            content: _post.content,
            id: _post.id,
            image: _post.image,
            categoryId: _post.categoryId,
            userName: _post.userName,
            postPassword: _post.postPassword,
          };
          post_list.push(post);
        });
        dispatch(setTest(post_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editPostAX = (post_id = null, post) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      console.log("게시물 정보가 없습니다.");
      return;
    }
    const headers = {
      // "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    // let form = new FormData();
    // form.append("multipartFile", post.image);
    // form.append("title", post.title);
    // form.append("content", post.content);
    // form.append("categoryId", post.category);
    // form.append("userName", post.userName);
    // form.append("postPassword", post.postPassword);
    // form.append("id", post_id);

    axios
      .post(
        "http://localhost:4000/post"
        //   .post(
        //     "http://33ef08a2f4f3.ngrok.io/v1/img-upload",
        // {
        //   title: post.title,
        //   image: post.image,
        //   content: post.content,
        //   categoryId: post.category,
        //   userName: post.userName,
        //   postPassword: post.postPassword,
        //   id: post.id,
        //   // is_open: post.public,
        //   // score: post.score,
        // },
        // form

        // { headers: headers }
      )
      .then(function (res) {
        const posts = {
          title: res.data.title,
          content: res.data.content,
          id: res.data.id,
          image: res.data.imgUrl,
          categoryId: res.data.categoryId,
          userName: res.data.userName,
          postPassword: res.data.password,
        };
        dispatch(editTest(post_id, posts));
        window.alert("게시글 수정 완료!");
        history.replace(`/post/${post_id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const deleteTestAX = (id) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://localhost:4000/post/${id}`)
      .then((res) => {
        dispatch(deleteTest(id));
        history.replace("/");
        window.alert("삭제 완료!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_TEST]: (state, action) =>
      produce(state, (draft) => {
        draft.t_list.push(...action.payload.post_list);

        draft.t_list = draft.t_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.id === cur.id) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.id === cur.id)] = cur;
            return acc;
          }
        }, []);
      }),

    [ADD_TEST]: (state, action) =>
      produce(state, (draft) => {
        draft.t_list.unshift(action.payload.test);
      }),
    [EDIT_TEST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.t_list.findIndex(
          (p) => p.id === parseInt(action.payload.post_id)
        );
        draft.t_list[idx] = { ...draft.t_list[idx], ...action.payload.post };
      }),
    [DELETE_TEST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.t_list.findIndex((p) => p.id === action.payload.id);

        if (idx !== -1) {
          // 배열에서 idx 위치의 요소 1개를 지웁니다.
          draft.t_list.splice(idx, 1);
          draft.t_list = draft.t_list.reduce((acc, cur) => {
            if (acc.findIndex((a) => a.id === cur.id) === -1) {
              return [...acc, cur];
            } else {
              acc[acc.findIndex((a) => a.id === cur.id)] = cur;
              return acc;
            }
          }, []);
        }
      }),
  },
  initialState
);

const actionCreators = {
  setTest,
  addTest,
  deleteTest,
  addPostAX,
  getPostAX,
  editPostAX,
  deleteTestAX,
};

export { actionCreators };
