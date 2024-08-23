import { useState, lazy, Suspense } from 'react'
import './App.module.css'
import Navigation from '../Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Loader from '../Loader/Loader'




const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
function App() {
  const [loading,setLoading] = useState(false);

  return (
    <>
      <header> 
        <div>
        <Navigation/>
         </div> 
        </header> 
        <main>
        {loading && <Loader />}
    <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage onLoad={setLoading}/>}/>
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
           <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
            </Route>
           <Route path="*" element={<NotFoundPage />} />
        </Routes> 
        </Suspense>
        </main>
    </>
  )
}

export default App
