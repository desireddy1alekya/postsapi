import * as types from "./actionType";
const getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});
const postDeleted = () => ({
  type: types.DELETE_POST,
});
const postAdded = () => ({
  type: types.ADD_POST,
});
const postUpdated = () => ({
  type: types.UPDATE_POST,
});
const getPost = (post) => ({
  type: types.GET_SINGLE_POST,
  payload: post,
});
export const loadPosts = () => {
  return async function (dispatch) {
    await fetch(`${process.env.REACT_APP_API}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => dispatch(getPosts(data)))
      .catch((error) => {
        console.log(error);
      });
  };
};
export const deletePost = (id) => {
  return async function (dispatch) {
    await fetch(`${process.env.REACT_APP_API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(postDeleted());
        dispatch(loadPosts());
      })
      .catch((error) => console.log(error));
  };
};
export const addPost = (post) => {
  return async function (dispatch) {
    await fetch(`${process.env.REACT_APP_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(postAdded());
      })
      .catch((error) => console.log(error));
  };
};
export const getSinglePost = (id) => {
  return async function (dispatch) {
    await fetch(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(getPost(data));
      })
      .catch((error) => console.log(error));
  };
};
export const updatePost = (post, id) => {
  return async function (dispatch) {
    await fetch(`${process.env.REACT_APP_API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(postUpdated());
      })
      .catch((error) => console.log(error));
  };
};
