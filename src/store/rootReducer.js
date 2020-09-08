const initialState = {
  categories: [],
}

const handlers = {

  DEFAULT: state => state,
}

export const rootReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}