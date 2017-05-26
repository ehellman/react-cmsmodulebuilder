import {
  FETCH_POSTS_HAS_ERRORED,
  FETCH_POSTS_IS_LOADING,
  FETCH_POSTS_SUCCESS
} from './constants'

export const fetchPostsHasErrored = (state = false, action) => {
  switch (action.type) {
    case FETCH_POSTS_HAS_ERRORED:
      return action.hasErrored
    default:
      return state
  }
}
export const fetchPostsIsLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_POSTS_IS_LOADING:
      return action.isLoading
    default:
      return state
  }
}
export const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}
