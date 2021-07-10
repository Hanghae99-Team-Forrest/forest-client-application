import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size, children } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === "main") {
    return (
      <MainBackground>
        <MainInner {...styles}>{children}</MainInner>
      </MainBackground>
    );
  }
  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  size: 3.6,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 25rem;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 0.4rem;
`;

const MainBackground = styled.div`
  width: 100%;
  min-width: 25rem;

`;

const MainInner = styled.div`
  position: relative;
  padding-top: 45%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  /* background-position: center; */
  background-size: cover;
`;

export default Image;
