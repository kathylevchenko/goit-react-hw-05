import { useEffect, useState } from "react"
import {fetchTrendingMovies} from "../../movies-api"
import css from "./HomePage.module.css"
import { lazy } from "react";
const MovieList = lazy(()=>import("../../components/MovieList/MovieList"));
import Loader from "../../components/Loader/Loader";

export default function HomePage({onLoad}){
 const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


useEffect(() => {
      const getAllMovies = async () => {
        try {
            setLoading(true)
            setError(false)
          const results = await fetchTrendingMovies();
          setMovies(results);
        } catch (error) {
          setError(true)
        } finally{
            setLoading(false)
        }
      };
      getAllMovies();
    }, []);
  return (
    <div>
      <h2 className={css.h2}>Trending today</h2>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}