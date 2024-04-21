import axios from 'axios'

const ENABLE_API_DELAY = true

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

if (ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}
