import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../movies-api";
import SearchBox from "../../components/SearchBox/SearchBox"

const MoviesPage = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const queryMovie = searchParam.get("query") ?? "";

  useEffect(() => {
    async function fetchMovie() {
      if (queryMovie === "") {
        return;
      }
      try {
        setIsLoader(true);
        setIsError(false);
        const data = await fetchMovies(queryMovie);
    
        setDataMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    fetchMovie();
  }, [queryMovie]);

  const handleSearch = async (query) => {
    searchParam.set("query", query);
    setSearchParam(searchParam);
    setDataMovies([]);
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      {isLoader && <Loader />}
      {dataMovies.length > 0 && <MoviesList movies={dataMovies} />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MoviesPage;