import { FETCH_CATEGORIES } from './types'

const initialState = {
  categories: [],
}

const handlers = {
  [FETCH_CATEGORIES]: (state, { payload }) => ({ ...state, categories: payload }),
  DEFAULT: state => state,
}

export const rootReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}