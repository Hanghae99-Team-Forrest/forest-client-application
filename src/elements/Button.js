import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    _onClick,
    children,
    margin,
    width,
    height,
    padding,
    bg,
    color,
    radius,
    shadow,
    size,
    cursor,
    border,
    ctg,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    bg: bg,
    color: color,
    radius: radius,
    shadow: shadow,
    size: size,
    cursor: cursor,
    border: border,
    ctg: ctg,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: false,
  width: "100%",
  height: "100%",
  size: "",
  padding: false,
  bg: false,
  color: "",
  radius: "",
  shadow: false,
  cursor: "",
  border: "",
  ctg: "",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.size ? `font-size: ${props.size}` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  box-sizing: border-box;
  border: none;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.shadow ? `box-shadow: 0.5rem 0.5rem 0.5rem #dcdde1;` : ""}
  ${(props) => (props.cursor ? `cursor: pointer;` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")}
  ${(props) =>
    props.ctg
      ? `&:hover {
      background-color: white;
      border: 0.1rem solid #78e08f;
    }`
      : ""}
`;

export default Button;
