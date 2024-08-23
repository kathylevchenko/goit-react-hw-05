import { Link, Outlet, useLocation } from "react-router-dom";
import { Suspense, useRef } from "react";
import css from "./MovieDetailsPage.module.css"
import MovieAbout from "../../components/MovieAbout/MovieAbout";
import Loader from "../../components/Loader/Loader";
// import MovieInfo from "../../components/MovieInfo/MovieInfo";

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
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to="reviews">
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