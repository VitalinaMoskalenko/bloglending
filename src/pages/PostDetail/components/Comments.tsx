import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CommentItem } from "../../../components";
import {
  addCommentToListLikeAction,
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

  const addCommentToLIkeList = (comment: CommentsType) =>
    dispatch(addCommentToListLikeAction(comment));

  useEffect(() => {
    console.log("commentList[0]", commentList[0]);
  }, [commentList]);

  const likeList = useSelector(getLikeListSelector);

  useEffect(() => {
    console.log("likeList", likeList);
  }, [likeList]);

  return (
    <Container>
      {commentList.map((item) => {
        return (
          <CommentItem
            key={item.id}
            name={item.name}
            body={item.body}
            email={item.email}
            onClick={() => addCommentToLIkeList(item)}
          />
        );
      })}
    </Container>
  );
};

export default Comments;
