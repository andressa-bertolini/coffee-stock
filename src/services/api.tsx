import axios from 'axios'

export const api = axios.create({
  baseURL: '/stobe/api/',
})