import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configureStore";

const SET_TEST = "SET_TEST";
const ADD_TEST = "ADD_TEST";
const EDIT_TEST = "EDIT_TEST";

const setTest = createAction(SET_TEST, (post_list) => ({ post_list }));
const addTest = createAction(ADD_TEST, (test) => ({ test }));
const editTest = createAction(EDIT_TEST, (post_id, post) => ({
  post_id,
  post,
}));

const initialState = {
  t_list: [],
  list: [{ id: 0, title: "title" }],
};

const addPostAX = (post) => {
  return function (dispatch, getState, { history }) {
    // const _image = getState().image.preview;

    // const formData = new FormData();
    // formData.append("image", post.image);
    // formData.append("title", post.title);
    // formData.append("content", post.content);

    // helper function: generate a new file from base64 String
    // const dataURLtoFile = (dataurl, filename) => {
    //   const arr = dataurl.split(",");
    //   const mime = arr[0].match(/:(.*?);/)[1];
    //   const bstr = atob(arr[1]);
    //   let n = bstr.length;
    //   const u8arr = new Uint8Array(n);
    //   while (n) {
    //     u8arr[n - 1] = bstr.charCodeAt(n - 1);
    //     n -= 1; // to make eslint happy
    //   }
    //   return new File([u8arr], filename, { type: mime });
    // };

    // const file = dataURLtoFile(_image);
    // console.log(file);

    // let form = new FormData();
    // form.append("file", file);

    // now upload
    const headers = {
      // "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    let form = new FormData();
    form.append("file", post.image);
    form.append("title", post.title);
    form.append("content", post.content);
    form.append("categoryId", post.category);
    form.append("is_open", post.public);
    form.append("score", post.score);
    form.append("userName", post.userName);
    form.append("postPassword", post.postPassword);

    axios
      .post(
        "http://localhost:4000/post",
        //   .post(
        //     "http://33ef08a2f4f3.ngrok.io/v1/img-upload",
        {
          title: post.title,
          image: post.image,
          content: post.content,
          categoryId: post.category,
          is_open: post.public,
          score: post.score,
          userName: post.userName,
          postPassword: post.postPassword,
        },
        // form,
        { headers: headers }
      )
      .then(function (res) {
        console.log(res);
        console.log(res.data);
        console.log(res.data.result);
        const posts = {
          title: res.data.title,
          content: res.data.content,
          id: res.data.id,
          image: res.data.image,
          categoryId: res.data.categoryId,
          is_open: res.data.is_open,
          score: res.data.score,
          userName: res.data.userName,
          postPassword: res.data.postPassword,
        };
        dispatch(addTest(posts));
        window.alert("게시글 작성 완료!");
        history.replace("/");
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
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .get("http://localhost:4000/post")
      .then((res) => {
        let post_list = [];
        res.data.forEach((_post) => {
          let post = {
            id: _post.id,
            title: _post.title,
            image: _post.image,
            content: _post.content,
            categoryId: _post.categoryId,
            userName: _post.userName,
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
    let form = new FormData();
    form.append("file", post.image);
    form.append("title", post.title);
    form.append("content", post.content);
    form.append("categoryId", post.category);
    form.append("userName", post.userName);
    form.append("postPassword", post.postPassword);
    form.append("id", post.id);
    // form.append("is_open", post.public);
    // form.append("score", post.score);
    axios
      .post(
        "http://localhost:4000/post",
        //   .post(
        //     "http://33ef08a2f4f3.ngrok.io/v1/img-upload",
        {
          title: post.title,
          image: post.image,
          content: post.content,
          categoryId: post.category,
          userName: post.userName,
          postPassword: post.postPassword,
          id: post.id,
          // is_open: post.public,
          // score: post.score,
        },
        // form,
        { headers: headers }
      )
      .then(function (res) {
        const posts = {
          title: res.data.title,
          content: res.data.content,
          id: res.data.id,
          image: res.data.image,
          categoryId: res.data.categoryId,
          userName: res.data.userName,
          postPassword: res.data.postPassword,
          // is_open: res.data.is_open,
          // score: res.data.score,
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

// const getOnePostAX = (id) => {
//   return function (dispatch, getState, { history }) {
//     const headers = {
//       "Content-Type": `application/json`,
//       "Access-Control-Allow-Origin": "*",
//     };
//     axios.get("http://localhost:4000/post").then((res) => {
//       let post_list = [];
//       let idx = res.data.findIndex((p) => p.id === parseInt(id));
//       let _post = res.data[idx];

//       let post = {
//         id: _post.id,
//         title: _post.title,
//         image: _post.image,
//         content: _post.content,
//         categoryId: _post.categoryId,
//       };
//       post_list.push(post);
//       dispatch(setTest(post_list));
//     });
//   };
// };

// const deletePostAX = (id) => {
//   return function (dispatch, getState, { history }) {
//     if (!userPassword) { userPassword 예상
//       window.alert("삭제할 수 없는 게시글입니다");
//       return;
//     }

//  firestore 예시 참고
//     postDB
//       .doc(id)
//       .delete()
//       .then((res) => {
//         dispatch(deletePost(id));
//         history.replace("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

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
        //   if (action.payload.paging) {
        //     draft.paging = action.payload.paging;
        //   }

        //   draft.is_loading = false;
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
  },
  initialState
);

const actionCreators = {
  setTest,
  addTest,
  addPostAX,
  getPostAX,
  editPostAX,
  // getOnePostAX,
};

export { actionCreators };
