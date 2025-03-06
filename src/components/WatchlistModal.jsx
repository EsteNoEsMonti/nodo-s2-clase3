import React from 'react'

const WatchlistModal = ({ isModalOpen, setIsModalOpen, watchlist, setWatchlist }) => {

  if (!isModalOpen) return null

  const onClose = () => setIsModalOpen(false)

  const removerFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id)) 
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center <-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative'>

        <p>WatchlistModal</p>
        <button
          onClick={onClose}
        >
          ✖️
        </button>
        {
          watchlist.length === 0 ? (
            <p>No hay pelis en la lista</p>
          ) : (
            watchlist.map((movie) => (
              <div key={movie.id}>
                <p>{movie.name}</p>
                <button
                  className='bg-red-500 p-2'
                  onClick={() => removerFromWatchlist(movie.id)}
                >
                  remover peli
                </button>

              </div>

            ))
          )


        }
      </div>
    </div>
  )
}

export default WatchlistModal