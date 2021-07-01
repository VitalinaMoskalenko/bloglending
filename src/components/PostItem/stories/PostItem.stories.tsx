import React from "react";
import styled from "styled-components";
import PostItem from "../";

const Container = styled.div`
  background-color: turquoise;
  height: 300px;
`;

export default { title: "PostItem" };

export const defaultPostItem = () => (
  <Container>
    <PostItem onClick={() => {}} description="Description" name="Name" />
  </Container>
);
