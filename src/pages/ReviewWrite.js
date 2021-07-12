import React from "react";

import { Grid, Text, Image, Input } from "../elements";
import DropDownList from "../components/DropDownList";
import ReviewContents from "../components/ReviewContent";

import { history } from "../redux/configureStore";

const ReviewWrite = (props) => {
  React.useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <React.Fragment>
      <Grid borderBottom="1px solid #bdbdbd" is_flex="t" maxWidth="100vw">
        <Text
          margin="0 2rem"
          size="2.3rem"
          padding="2rem"
          bold="t"
          _onClick={() => {
            history.push("/");
          }}
          cursor="t"
        >
          For, Rest
        </Text>
        <Text margin="0 2rem" size="2.3rem" padding="2rem" bold="t">
          리뷰 작성
        </Text>
      </Grid>

      <Grid borderBottom="1px solid #bdbdbd" is_flex="t">
        {window.innerWidth > 500 ? (
          <DropDownList />
        ) : (
          <DropDownList shape="no_flex" />
        )}
      </Grid>

      {window.innerWidth > 500 ? (
        <ReviewContents />
      ) : (
        <ReviewContents shape="no_flex" />
      )}
    </React.Fragment>
  );
};

export default ReviewWrite;
