import { ThunkDispatch } from "redux-thunk";
import { fetchPostsService } from "../../../services/posts";
import {
  ActionConstType,
  GetPostsActionType,
  GetPostsSuccessActionType,
  GetPostsErrorActionType,
  AppStateType,
} from "../../../types";
import { Posts } from "../../../types/models";

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
