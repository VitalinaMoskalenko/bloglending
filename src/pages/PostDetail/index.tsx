import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { H3, Body, Spinner } from "../../components";
import {
  fetchPostsDetailAction,
  getPostDetailAction,
} from "../../store/actions";
import { getPostDetailLoading, getPostDetailSelector } from "../../types";
import Comments from "./components/Comments";
import FormComments from "./components/FormComments";

const Container = styled.div`
  margin: 40px;
`;

const Title = styled(H3)`
  text-align: center;
  margin-bottom: 10px;
`;

type RouteParams = {
  id: string;
};

const PostDetail = () => {
  const params = useParams<RouteParams | undefined>();

  const dispatch = useDispatch();
  const history = useHistory();

  const fetchPostDetail = (id: string) => dispatch(fetchPostsDetailAction(id));

  useEffect(() => {
    if (params?.id) {
      fetchPostDetail(params.id);
    }
  }, [params]);

  const selectedPostDetail = useSelector(getPostDetailSelector);
  const isPostDetailLoading = useSelector(getPostDetailLoading);

  return (
    <Container>
      <Title>{selectedPostDetail?.title}</Title>
      <Body>{selectedPostDetail?.body}</Body>
      <Comments id={selectedPostDetail?.id} />
      <FormComments />
      {isPostDetailLoading && <Spinner />}
    </Container>
  );
};

export default PostDetail;
