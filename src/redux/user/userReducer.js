import {SET_CURRENT_USER} from './userTypes'

const initialState = {
  currentUser: null
}

const handlers = {
  [SET_CURRENT_USER]: (state, {payload}) => ({
    ...state,
    currentUser: payload
  }),
  DEFAULT: state => state
}

const userReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default userReducer
