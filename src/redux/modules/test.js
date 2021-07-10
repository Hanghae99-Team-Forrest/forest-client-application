import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

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
        "/api/posts",
        { title: title, content: contents },
        { headers: headers }
      )
      .then(function (response) {
        console.log(response);
        const test = { title: title, content: contents, id: response.id };
        dispatch(addTest(test));
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
      .get("/api/posts")
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
