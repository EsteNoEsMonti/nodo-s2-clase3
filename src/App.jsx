import { useState } from "react"
import Header from "./components/Header"
import WatchlistModal from "./components/WatchlistModal"
import MoviesList from "./components/MoviesList "

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [watchlist, setWatchlist] = useState([])

  // hook useEffect

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />

      <WatchlistModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      />

      <MoviesList watchlist={watchlist} setWatchlist={setWatchlist} />
    </>
  )
}

export default App
