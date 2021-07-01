import {
  ActionConstType,
  BlogReducerActionType,
  PostsStateType,
} from "../../../types";

const initialState: PostsStateType = {
  postList: [],
  error: null,
  isLoadingPosts: false,
};

export function posts(state = initialState, action: BlogReducerActionType) {
  switch (action.type) {
    case ActionConstType.GET_POSTS:
      return {
        ...state,
        isLoadingPosts: true,
      };
    case ActionConstType.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoadingPosts: false,
        postList: action.data,
      };
    case ActionConstType.GET_POSTS_ERROR:
      return {
        ...state,
        isLoadingPosts: false,
        error: action.error,
      };
    default:
      return state;
  }
}
