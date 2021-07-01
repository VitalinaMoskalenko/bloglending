export const baseUrl = "https://jsonplaceholder.typicode.com/";

export const getPostsEndpoint = `${baseUrl}posts`;
export const getPostByIdEndpoint = (id: number) => {
  return `${baseUrl}posts/${id}`;
};
