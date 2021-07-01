import { AppStateType } from "../../../common";

const getPostListSelector = (state: AppStateType) => {
  return state.posts.postList;
};

const getPostListLoading = (state: AppStateType) => {
  return state.posts.isLoadingPosts;
};

export { getPostListSelector, getPostListLoading };
