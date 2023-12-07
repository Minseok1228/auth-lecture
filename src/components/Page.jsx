import React from "react";
import styled from "styled-components";

function Page({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

export default Page;

const Wrapper = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 20px;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
