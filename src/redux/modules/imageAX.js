import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const UPLOADING = "UPLOADING";
const SET_PREVIEW = "SET_PREVIEW";
const SET_CTG = "SET_CTG";
const SET_PUBLIC = "SET_PUBLIC";
const SET_SCORE = "SET_SCORE";

const uploading = createAction(UPLOADING, (uploading) => ({uploading}));
const setPreview = createAction(SET_PREVIEW, (data_url) => ({data_url}));
const setCategory = createAction(SET_CTG, (ctg) => ({ctg}));
const setPublic = createAction(SET_PUBLIC, (is_public) => ({is_public}));
const setScore = createAction(SET_SCORE, (score) => ({score}));



const initialState = {
    image_url: '',
    uploading: false,
    preview: null,
    category: null,
    public: null,
    score: null,
}

export default handleActions({
    [UPLOADING]: (state, action) => produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
    }),
    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
      draft.preview = action.payload.data_url;
    }),
    [SET_CTG]: (state, action) => produce(state, (draft) => {
      draft.category = action.payload.ctg;
    }),
    [SET_PUBLIC]: (state, action) => produce(state, (draft) => {
      draft.public = action.payload.is_public;
    }),
    [SET_SCORE]: (state, action) => produce(state, (draft) => {
      draft.score = action.payload.score;
    })
}, initialState);

const actionCreators = {
  setPreview,
  setCategory,
  setPublic,
  setScore,
};

export {actionCreators};