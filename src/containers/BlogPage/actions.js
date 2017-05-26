import {
  FETCH_POSTS_HAS_ERRORED,
  FETCH_POSTS_IS_LOADING,
  FETCH_POSTS_SUCCESS
} from './constants'
import axios from 'axios'

export const fetchPostsHasErrored = (bool, err) => {
  return {
    type: FETCH_POSTS_HAS_ERRORED,
    hasErrored: bool,
    text: err
  }
}
export const fetchPostsIsLoading = (bool) => {
  return {
    type: FETCH_POSTS_IS_LOADING,
    isLoading: bool
  }
}
export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  }
}

export const fetchPosts = (url) => {
  return (dispatch) => {
    dispatch(fetchPostsIsLoading(true))
    axios.get(url)
      .then(response => {
        dispatch(fetchPostsIsLoading(false))
        return response
      })
      .then((response) => response.data)
      .then((posts) => dispatch(fetchPostsSuccess(posts)))
      .catch((response) => dispatch(fetchPostsHasErrored(true, response.statusText)))
  }
}
