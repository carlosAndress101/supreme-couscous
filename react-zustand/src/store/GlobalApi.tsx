import axios from 'axios'


const movieUrl = "https://api.themoviedb.org/3"
const api_key = "a09f4ea97450bccc71da0bf0d21e4128"

//https://api.themoviedb.org/3/trending/movie/day?language=en-US
const getVideos = axios.get(movieUrl+"/trending/movie/day?api_key="+api_key)


export default {
  getVideos
}