import {
  ActionConstType,
  BlogReducerActionType,
  PostsStateType,
} from "../../../types";

const initialState: PostsStateType = {
  postList: [],
  selectedPostDetail: null,
  commentList: [],
  likeList: [],
  error: null,
  isLoading: false,
};

export function posts(state = initialState, action: BlogReducerActionType) {
  switch (action.type) {
    case ActionConstType.GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionConstType.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postList: action.data,
      };
    case ActionConstType.GET_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case ActionConstType.GET_POST_DETAIL:
      return {
        ...state,
        isLoading: true,
      };
    case ActionConstType.GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedPostDetail: action.data,
      };
    case ActionConstType.GET_POST_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case ActionConstType.GET_COMMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionConstType.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        commentList: action.data,
      };
    case ActionConstType.GET_COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case ActionConstType.ADD_COMMENT_TO_LIKE_LIST:
      return {
        ...state,
        likeList: [...state.likeList, action.likeList],
      };

    case ActionConstType.DELETE_COMMENT_FROM_LIKE_LIST:
      return {
        ...state,
        likeList: [...state.likeList.filter((item) => item.id !== action.id)],
      };
    default:
      return state;
  }
}
