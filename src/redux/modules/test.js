import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configureStore";

const SET_TEST = "SET_TEST";
const ADD_TEST = "ADD_TEST";

const setTest = createAction(SET_TEST, (post_list) => ({ post_list }));
const addTest = createAction(ADD_TEST, (test) => ({ test }));

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
          console.log(_post);

          let post = {
            id: _post.id,
            title: _post.title,
            image: _post.image,
            content: _post.content,
          };
          post_list.push(post);
        });
        dispatch(setTest(post_list));
        console.log(res);
        console.log(res.data);
        console.log(post_list);
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
        //   if (action.payload.paging) {
        //     draft.paging = action.payload.paging;
        //   }

        //   draft.is_loading = false;
        console.log(draft.t_list);
      }),

    [ADD_TEST]: (state, action) =>
      produce(state, (draft) => {
        draft.t_list.unshift(action.payload.test);
      }),
  },
  initialState
);

const actionCreators = {
  setTest,
  addTest,
  addPostAX,
  getPostAX,
};

export { actionCreators };
