import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SET_PREVIEW = "SET_PREVIEW";
const SET_CTG = "SET_CTG";

const setPreview = createAction(SET_PREVIEW, (data_url) => ({data_url}));
const setCategory = createAction(SET_CTG, (ctg) => ({ctg}));



const initialState = {
    image_url: '',
    preview: null,
    category: null,
}

export default handleActions({
    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
      draft.preview = action.payload.data_url;
    }),
    [SET_CTG]: (state, action) => produce(state, (draft) => {
      draft.category = action.payload.ctg;
    }),
}, initialState);

const actionCreators = {
  setPreview,
  setCategory,
};

export {actionCreators};