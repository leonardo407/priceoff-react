import axios from 'axios'
import { FETCH_CATEGORIES, LOGIN } from './types'

export function login(name, phone) {
  return async dispatch => {
    const response = await axios.post('http://localhost:3001/api/login/', { name, phone }, {
      withCredentials: true,
    })
    const user = response.data.data

    dispatch({
      type: LOGIN,
      payload: user,
    })

    return user
  }
}

export function fetchCategories() {
  return async dispatch => {
    const response = await axios.get('http://localhost:3001/api/categories/', {
      withCredentials: true,
    })

    dispatch({
      type: FETCH_CATEGORIES,
      payload: response.data,
    })
  }
}