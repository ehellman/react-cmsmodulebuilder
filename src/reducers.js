import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  fetchPostsHasErrored,
  fetchPostsIsLoading,
  posts
} from 'containers/BlogPage/reducer'

export const sayHello = (text) => {
  return {
    type: 'SAY_HELLO',
    text: text
  }
}

const testReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAY_HELLO':
      console.log('hi there')
      return state
    default:
      return state

  }
}

export default combineReducers({
  router: routerReducer,
  testReducer,
  fetchPostsHasErrored,
  fetchPostsIsLoading,
  posts
})
