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
};

const addPostAX = (title, contents) => {
  return function (dispatch, getState, { history }) {
    const axios = require("axios");
    const headers = {
      "Content-Type": `application/json`,
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .post(
        "http://localhost:4000/posts",
        { title: title, content: contents },
        { headers: headers }
      )
      .then(function (response) {
        console.log(response);
        const posts = { title: title, content: contents, id: response.id };
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
    const axios = require("axios");
    const headers = {
      "Content-Type": `application/json`,
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        console.log(res);
        console.log(res.data);
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

        if (action.payload.paging) {
          draft.paging = action.payload.paging;
        }

        draft.is_loading = false;
      }),

    [ADD_TEST]: (state, action) =>
      produce(state, (draft) => {
        draft.t_list.unshift(action.payload.test);
      }),
  },
  initialState
);

const actionCreators = {
  addTest,
  addPostAX,
  getPostAX,
};

export { actionCreators };
