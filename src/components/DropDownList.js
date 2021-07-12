import React from "react";

import { Grid, DropDown } from "../elements";

const DropDownList = (props) => {
  return (
    <React.Fragment>
      <Grid padding="1rem 1rem" margin="0" maxWidth="50rem" is_flex="t">
        <DropDown
          menu_name="카테고리"
          options={["산", "바 다", "계 곡"]}
          size="0 2.6rem"
        />
        <DropDown
          menu_name="공개여부"
          options={["공개", "비공개"]}
          size="0 2.3rem"
        />
        <DropDown
          menu_name="평점"
          options={["1", "2", "3", "4", "5"]}
          size="0 4rem"
        />
      </Grid>
    </React.Fragment>
  );
};

DropDownList.defaultProps = {
  shape: "",
};

export default DropDownList;
