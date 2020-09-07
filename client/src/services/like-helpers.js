const axios = require('axios');
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://poetryclub.herokuapp.com' : 'http://localhost:3000'
})

export const likePoem = async (user_id, poem_id) => {
  try {
    const resp = await api.post(`/users/${user_id}/poems/${poem_id}/likes`)
    return resp
  } catch (error) {
    throw error
  }
}

export const getPoemLikes = async (user_id, poem_id) => {
  try {
    const resp = await api.get(`users/${user_id}/poems/${poem_id}/likes`)
    return resp
  } catch (error) {
    throw error
  }
}

export const getLikes = async () => {
  try {
    const resp = await api.get(`/likes/`)
    return resp.data
  } catch (e) {
    throw e
  }
}
