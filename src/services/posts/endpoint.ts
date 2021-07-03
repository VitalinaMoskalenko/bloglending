export const baseUrl = "https://jsonplaceholder.typicode.com/";

export const getPostsEndpoint = `${baseUrl}posts`;
export const getPostByIdEndpoint = (id: string) => {
  return `${baseUrl}posts/${id}`;
};
export const getCommentEndpoint = (id: number) => {
  return `${baseUrl}posts/${id}/comments`;
};
