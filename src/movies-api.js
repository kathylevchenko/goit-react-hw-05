import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

export {
  fetchTrendingMovies,
  fetchMovies,
  fetchMovieDetails,
  fetchReviews,
  fetchCast,
};

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjZkNzBiZDU0OTY4ZWZkMzhjZDljMDdkMjVlNjYzZCIsIm5iZiI6MTcyNDA5MjMyMS42NDY5MzUsInN1YiI6IjY2YzM4ZTFkMDY2MGMwYjRhZDc1ZGI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p44nK7Gi2xQ5OuTsfG2wSZth_q1ccPkYExdp472NU3U"
  },
};

const fetchTrendingMovies = async () => {
  const { data } = await axios(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

const fetchMovies = async (userRequest) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?query=${userRequest}&language=en-US&page=1`,
    options
  );
  return data.results;
};

const fetchMovieDetails = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

const fetchCast = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return data;
};

const fetchReviews = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};