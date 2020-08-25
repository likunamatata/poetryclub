const axios = require('axios');
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://poetryclub.herokuapp.com' : 'http://localhost:3000'
})

export const createPoem = async (poem) => {
  console.log("I'm saving a poem", poem)
  try {
    const resp = await api.post(`/poems`, { poem: poem })
    return resp
  } catch (error) {
    throw error
  }
}

export const getAllPoems = async () => {
  try {
    const resp = await api.get(`/poems`)
    return resp
  } catch (error) {
    throw error
  }
}

export const getOnePoem = async (poem_id) => {
  try {
    const resp = await api.get(`/poems/${poem_id}`)
    return resp
  } catch (error) {
    throw error
  }
}

export const getUserPoems = async (user_id) => {
  try {
    const resp = await api.get(`/users/${user_id}/poems`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const getSomePoems = async (keyword) => {
  try {
    const resp = await api.get(`/poems/search/${keyword}`)
    return resp
  } catch (error) {
    throw error
  }
}