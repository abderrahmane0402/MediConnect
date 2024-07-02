import axios from "axios"

const myAxios = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    "Cache-Control": "no-cache",
  },
})

export default myAxios
