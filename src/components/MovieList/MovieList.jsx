import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    // <div className={css.movies}>
    <ul className={css.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              <p className={css.movieName}>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
    // </div>
  );
};

export default MoviesList;