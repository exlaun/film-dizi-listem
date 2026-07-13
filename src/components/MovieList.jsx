import MovieItem from './MovieItem'

// Filtrelenmiş listeyi gösterir; boşsa duruma uygun mesaj (emptyMessage).
function MovieList({ movies, emptyMessage, onToggle, onEdit, onDelete }) {
  if (movies.length === 0) {
    return (
      <div className="empty">
        <span className="empty-icon">🎬</span>
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default MovieList
