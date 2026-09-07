import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "./postSlice";

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    const postsWithImages = data.map((post) => ({
      ...post,
      imgSrc: `https://picsum.photos/200?random=${post.id}`,
    }));

    dispatch(fetchPostsSuccess(postsWithImages));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};
