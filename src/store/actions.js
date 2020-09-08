import axios from 'axios'
import { FETCH_CATEGORIES } from './types'

export function fetchCategories() {
  return async dispatch => {
    const response = await axios.get('http://localhost:3000/api/categories/', {
      withCredentials: true,
    })

    dispatch({
      type: FETCH_CATEGORIES,
      payload: response.data,
    })
  }
}