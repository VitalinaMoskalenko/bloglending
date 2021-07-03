import { Action } from "redux";
import { Comments, Posts } from "../../../models";

export enum ActionConstType {
  GET_POSTS = "GET_POSTS",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_ERROR = "GET_POSTS_ERROR",

  GET_POST_DETAIL = "GET_POST_DETAIL",
  GET_POST_DETAIL_SUCCESS = "GET_POST_DETAIL_SUCCESS",
  GET_POST_DETAIL_ERROR = "GET_POST_DETAIL_ERROR",

  GET_COMMENTS = "GET_COMMENTS",
  GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS",
  GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR",

  ADD_COMMENT_TO_LIKE_LIST = "ADD_COMMENT_TO_LIKE_LIST",
  DELETE_COMMENT_FROM_LIKE_LIST = "DELETE_COMMENT_FROM_LIKE_LIST",
}

// POST ACTIONS

interface GetPostsActionType extends Action {
  type: ActionConstType.GET_POSTS;
}

interface GetPostsSuccessActionType extends Action {
  type: ActionConstType.GET_POSTS_SUCCESS;
  data: Posts[];
}

interface GetPostsErrorActionType extends Action {
  type: ActionConstType.GET_POSTS_ERROR;
  error: any;
}

// POST DETAIL ACTIONS

interface GetPostDetailActionType extends Action {
  type: ActionConstType.GET_POST_DETAIL;
}

interface GetPostDetailSuccessActionType extends Action {
  type: ActionConstType.GET_POST_DETAIL_SUCCESS;
  data: Posts;
}

interface GetPostDetailErrorActionType extends Action {
  type: ActionConstType.GET_POST_DETAIL_ERROR;
  error: any;
}

// COMMENTS ACTIONS

interface GetCommentsActionType extends Action {
  type: ActionConstType.GET_COMMENTS;
}

interface GetCommentsSuccessActionType extends Action {
  type: ActionConstType.GET_COMMENTS_SUCCESS;
  data: Comments[];
}

interface GetCommentsErrorActionType extends Action {
  type: ActionConstType.GET_COMMENTS_ERROR;
  error: any;
}

// ADD COMMENT TO LIKE LIST

interface AddCommentToLikeListActionType extends Action {
  type: ActionConstType.ADD_COMMENT_TO_LIKE_LIST;
  likeList: Comments[];
}

interface DeleteCommentFromLikeListActionType extends Action {
  type: ActionConstType.DELETE_COMMENT_FROM_LIKE_LIST;
}

type BlogReducerActionType =
  | GetPostsActionType
  | GetPostsSuccessActionType
  | GetPostsErrorActionType
  | GetPostDetailActionType
  | GetPostDetailSuccessActionType
  | GetPostDetailErrorActionType
  | GetCommentsActionType
  | GetCommentsSuccessActionType
  | GetCommentsErrorActionType
  | AddCommentToLikeListActionType
  | DeleteCommentFromLikeListActionType;

export type {
  BlogReducerActionType,
  GetPostsActionType,
  GetPostsSuccessActionType,
  GetPostsErrorActionType,
  GetPostDetailActionType,
  GetPostDetailSuccessActionType,
  GetPostDetailErrorActionType,
  GetCommentsActionType,
  GetCommentsSuccessActionType,
  GetCommentsErrorActionType,
  AddCommentToLikeListActionType,
  DeleteCommentFromLikeListActionType,
};
