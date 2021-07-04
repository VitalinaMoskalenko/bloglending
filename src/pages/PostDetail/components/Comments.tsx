import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CommentItem } from "../../../components";
import {
  addCommentToListLikeAction,
  deleteCommentFromListLikeAction,
  fetchCommentsAction,
} from "../../../store/actions";
import {
  BreakpointType,
  Comments as CommentsType,
  getCommentListSelector,
  getLikeListSelector,
} from "../../../types";

const Container = styled.ul`
  margin: 10px 40px;
  padding: 0px;
  @media (max-width: ${BreakpointType.xs}px) {
    margin: 10px 0px;
  }
`;

type PropsType = {
  id: number | undefined;
};

const Comments = ({ id }: PropsType) => {
  const dispatch = useDispatch();

  const fetchComments = (id: number) => dispatch(fetchCommentsAction(id));

  useEffect(() => {
    if (id) {
      fetchComments(id);
    }
  }, [id]);

  const commentList = useSelector(getCommentListSelector);

  const addCommentToListLike = (comment: CommentsType) =>
    dispatch(addCommentToListLikeAction(comment));

  const removeCommentFromListLike = (id: number) =>
    dispatch(deleteCommentFromListLikeAction(id));

  const likeList = useSelector(getLikeListSelector);

  const toggleLike = (item: CommentsType) => {
    const likedItem = likeList.find(
      (likedComments) => likedComments.id === item.id
    );

    if (!likedItem) {
      addCommentToListLike(item);
    } else {
      removeCommentFromListLike(item.id);
    }
  };

  useEffect(() => {
    console.log("likeList", likeList);
  }, [likeList]);

  return (
    <Container>
      {commentList.map((item) => {
        const likedItem = likeList.find(
          (likedComments) => likedComments.id === item.id
        );

        return (
          <CommentItem
            key={item.id}
            name={item.name}
            body={item.body}
            email={item.email}
            onClick={() => toggleLike(item)}
            isToggle={!!likedItem}
          />
        );
      })}
    </Container>
  );
};

export default Comments;
