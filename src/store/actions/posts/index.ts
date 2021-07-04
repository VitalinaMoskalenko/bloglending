import { ThunkDispatch } from "redux-thunk";
import {
  fetchCommentsService,
  fetchPostByIdService,
  fetchPostsService,
} from "../../../services";
import {
  ActionConstType,
  GetPostsActionType,
  GetPostsSuccessActionType,
  GetPostsErrorActionType,
  AppStateType,
  GetPostDetailActionType,
  GetPostDetailSuccessActionType,
  GetPostDetailErrorActionType,
  GetCommentsActionType,
  GetCommentsSuccessActionType,
  GetCommentsErrorActionType,
} from "../../../types";
import { Comments, Posts } from "../../../types/models";

// POST ACTION

export const getPostsAction = (): GetPostsActionType => {
  return {
    type: ActionConstType.GET_POSTS,
  };
};

export const getPostsSuccessAction = (
  data: Posts[]
): GetPostsSuccessActionType => {
  return {
    type: ActionConstType.GET_POSTS_SUCCESS,
    data,
  };
};

export const getPostsErrorAction = (error: any): GetPostsErrorActionType => {
  return {
    type: ActionConstType.GET_POSTS_ERROR,
    error,
  };
};

export const fetchPostsAction = () => {
  return async (dispatch: ThunkDispatch<AppStateType, void, any>) => {
    dispatch(getPostsAction());
    const response = await fetchPostsService();

    if (response.data) {
      dispatch(getPostsSuccessAction(response.data));
    } else {
      dispatch(getPostsErrorAction(response));
    }
  };
};

// POST DETAIL ACTION

export const getPostDetailAction = (): GetPostDetailActionType => {
  return {
    type: ActionConstType.GET_POST_DETAIL,
  };
};

export const getPostDetailSuccessAction = (
  data: Posts
): GetPostDetailSuccessActionType => {
  return {
    type: ActionConstType.GET_POST_DETAIL_SUCCESS,
    data,
  };
};

export const getPostDetailErrorAction = (
  error: any
): GetPostDetailErrorActionType => {
  return {
    type: ActionConstType.GET_POST_DETAIL_ERROR,
    error,
  };
};

export const fetchPostsDetailAction = (id: string) => {
  return async (dispatch: ThunkDispatch<AppStateType, void, any>) => {
    dispatch(getPostDetailAction());
    const response = await fetchPostByIdService(id);

    if (response) {
      dispatch(getPostDetailSuccessAction(response));
    } else {
      dispatch(getPostDetailErrorAction(response));
    }
  };
};

// COMMENTS ACTION

export const getCommentsAction = (): GetCommentsActionType => {
  return {
    type: ActionConstType.GET_COMMENTS,
  };
};

export const getCommentsSuccessAction = (
  data: Comments[]
): GetCommentsSuccessActionType => {
  return {
    type: ActionConstType.GET_COMMENTS_SUCCESS,
    data,
  };
};

export const getCommentsErrorAction = (
  error: any
): GetCommentsErrorActionType => {
  return {
    type: ActionConstType.GET_COMMENTS_ERROR,
    error,
  };
};

export const fetchCommentsAction = (id: number) => {
  return async (dispatch: ThunkDispatch<AppStateType, void, any>) => {
    dispatch(getCommentsAction());
    const response = await fetchCommentsService(id);

    if (response.data) {
      dispatch(getCommentsSuccessAction(response.data));
    } else {
      dispatch(getCommentsErrorAction(response));
    }
  };
};

export const addCommentToListLikeAction = (comment: Comments) => {
  return {
    type: ActionConstType.ADD_COMMENT_TO_LIKE_LIST,
    likeList: comment,
  };
};

export const deleteCommentFromListLikeAction = (id: number) => {
  return {
    type: ActionConstType.DELETE_COMMENT_FROM_LIKE_LIST,
    id: id,
  };
};
