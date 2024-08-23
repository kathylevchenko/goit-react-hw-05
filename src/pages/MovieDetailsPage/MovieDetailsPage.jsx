import { Link, Outlet, useLocation } from "react-router-dom";
import { Suspense, useRef } from "react";
import css from "./MovieDetailsPage.module.css"
import MovieAbout from "../../components/MovieAbout/MovieAbout";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = useRef(location.state || "/movies");

  return (
    <div>
      <Link to={backLink.current}>
        <button className={css.btn} type="button">Go Back</button>
      </Link>
      <MovieAbout />
      <div className={css.container}>
        <h2 className={css.title}>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;