import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjM1MTU1MWI0YjcyNjQwNTc4ZTIwNDQ1ZWViZmZkNiIsIm5iZiI6MTU4MTQyNjUxNi45NDMsInN1YiI6IjVlNDJhNzU0OTYwMzMxMDAxOWYxNzk1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7YRdNlWjPau7CgOBG2rCgamLatQHM_x9hmpuUi3TTtk",
  },
});

export default tmdb;
