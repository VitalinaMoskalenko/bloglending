import { Action } from "redux";
import { Posts } from "../../../models";

export enum ActionConstType {
  GET_POSTS = "GET_POSTS",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_ERROR = "GET_POSTS_ERROR",
  GET_COMMENTS = "GET_COMMENTS",
}

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

interface GetCommentsActionType extends Action {
  type: ActionConstType.GET_COMMENTS;
}

type BlogReducerActionType =
  | GetPostsActionType
  | GetCommentsActionType
  | GetPostsSuccessActionType
  | GetPostsErrorActionType;

export type {
  GetPostsActionType,
  GetPostsSuccessActionType,
  GetPostsErrorActionType,
  BlogReducerActionType,
};
