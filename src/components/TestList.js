import React from "react";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

const TestList = (props) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(postActions.getPostAX());
    })
    return (
        <React.Fragment>
            <div>

                <button onClick={() => {history.push('/write')}}>페이지</button>
            </div>

        </React.Fragment>
    );
}

TestList.defaultProps = {};

export default TestList;