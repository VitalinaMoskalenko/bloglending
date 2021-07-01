import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PostItem, Spinner } from "../../components";
import { fetchPostsAction } from "../../store/actions/posts";
import {
  AppRouteType,
  getPostListLoading,
  getPostListSelector,
} from "../../types";
import ListHeader from "./components/ListHeader";

const Container = styled.div`
  padding: 20px 40px;
`;

const PostsContainer = styled.ul`
  margin-bottom: 10px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchPosts = () => dispatch(fetchPostsAction());

  useEffect(() => {
    fetchPosts();
  }, []);

  const listPost = useSelector(getPostListSelector);
  const isListPostLoading = useSelector(getPostListLoading);

  const openPostDetails = (id: number) => {
    history.push(`${AppRouteType.postDetail}/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <ListHeader />
      <PostsContainer>
        {listPost?.map((item) => (
          <PostItem
            key={item.id}
            onClick={() => openPostDetails(item.id)}
            name={item.title}
            description={item.body}
          />
        ))}
      </PostsContainer>
      {isListPostLoading && <Spinner />}
    </Container>
  );
};

export default Home;
