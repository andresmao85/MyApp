import axios from "axios"

// export const baseAPI = axios.create({ baseURL: import.meta.env.VITE_API_URL })
export const baseAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
})

// api online "https://jsonplaceholder.typicode.com/"
// api local http://127.0.0.1:3000/
