import { env } from '../config.js'

const API_END_POINT = 'https://api.unsplash.com'

const DEFAULT_OPTIONS = {
  headers: {
    Authorization: `Client-ID ${env.API_KEY}`,
  },
}

export const request = (url, options) => {
  const response = fetch(`${API_END_POINT}${url}`, { options, ...DEFAULT_OPTIONS })
  return response.then((res) => res.json())
}
