import React from 'react'
import movies from '../api/movies.json'

const MoviesList = ({ watchlist, setWatchlist }) => {

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie])
  }

  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className='bg-gray-700 p-4 rounded shadow-md text-center'
        >
          <img src={`/assets/imgMovies/${movie.img}.jpg`} />
          <h3 className='text-lg font-semibold'>{movie.name}</h3>
          <button
            className='bg-green-500 p-2'
            onClick={() => addToWatchlist(movie) }
          >
            Agregar a watchlist
          </button>
        </div>
      ))}


    </div>
  )
}

export default MoviesList 