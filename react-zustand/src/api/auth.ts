import axios from "../libs/axios";

const LoginRequest = async ( email: string, password: string) => {
  return axios.post('/login', {
    email,
    password
  })
}


export {LoginRequest}