import React from "react";

import { Grid, Text, DropDown, Input } from "../elements";

const ReviewWrite = (props) => {
  return (
    <React.Fragment>
      <Grid borderBottom="1px solid #bdbdbd">
        <Text margin="0 2rem" size="2.5rem" padding="2rem" bold="t">
          For, Rest
        </Text>
      </Grid>
      <Grid borderBottom="1px solid #bdbdbd" is_flex="t">
        <Grid padding="1rem 1rem" is_flex="t" margin="0">
          <DropDown menu_name='카테고리' options={["산", "바 다", "계 곡"]} size='0 2.6rem'/>
          <DropDown menu_name='공개여부' options={["공개", "비공개"]} size='0 2.3rem'/>
          <DropDown menu_name='평점' options={["1", "2", "3", '4', '5']} size='0 2.4rem'/>
        </Grid>
        <Grid padding="1rem 3rem"margin="0 auto" maxWidth='80rem'>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export default ReviewWrite;