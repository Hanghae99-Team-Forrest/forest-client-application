import React from "react";

import { Grid, DropDown } from "../elements";

const DropDownList = (props) => {
  return (
    <React.Fragment>
      <Grid padding="1rem 2.5rem" margin="0" maxWidth="50rem" is_flex="t">
        <DropDown
          menu_name="카테고리"
          options={["산", "바 다", "계 곡"]}
          size="0 2.6rem"
          onclick={() => {}}
        />
      </Grid>
    </React.Fragment>
  );
};

DropDownList.defaultProps = {
  shape: "",
};

export default DropDownList;
