import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

const PostDetail = () => {
  useEffect(() => {
    console.log("PostDetail");
  }, []);

  return (
    <Container>
      <h1>PostDetail</h1>
    </Container>
  );
};

export default PostDetail;
