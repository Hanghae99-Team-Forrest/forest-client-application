import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, width, is_main } = props;

  const styles = {bold: bold, color: color, size: size, margin, width, is_main};
  return (
      <P {...styles}>
          {children}
      </P>
  )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "1.4rem",
  margin: false,
  width: false,
  is_main: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
  ${(props) => (props.width? `width: ${props.width};` : '')}
  ${(props) => (props.is_main? `font-size: 1.6rem; font-weight: 500; text-align: center;` : "")}
`;

export default Text;
