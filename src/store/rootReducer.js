import { FETCH_CATEGORIES, LOGIN } from './types'

const initialState = {
  user: {},
  categories: [],
}

const handlers = {
  [LOGIN]: (state, { payload }) => ({ ...state, user: payload }),
  [FETCH_CATEGORIES]: (state, { payload }) => ({ ...state, categories: payload }),
  DEFAULT: state => state,
}

export const rootReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}