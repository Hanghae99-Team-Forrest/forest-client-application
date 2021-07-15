import React from "react";

import { Grid, Text } from "../elements";
import DetailContent from "./DetailContent";

const Detail = (props) => {
  React.useEffect(() => {
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
            window.location.replace("/");
          }}
          cursor="t"
        >
          For, Rest
        </Text>
        <Text margin="0 2rem" size="2.3rem" padding="2rem" bold="t">
          상세 정보
        </Text>
      </Grid>
      <Grid borderBottom="1px solid #bdbdbd">
          <DetailContent {...props}/>
      </Grid>
    </React.Fragment>
  );
};

export default Detail;
