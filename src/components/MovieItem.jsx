// Tek bir kayıt satırı: bilgiler + durum/düzenle/sil butonları.
function MovieItem({ movie, onToggle, onEdit, onDelete }) {
  const watched = movie.status === 'izlendi'

  // Yanlışlıkla silmeyi önlemek için onay iste
  function handleDelete() {
    if (window.confirm(`"${movie.title}" silinsin mi?`)) {
      onDelete(movie.id)
    }
  }

  return (
    <li className={watched ? 'movie-item watched' : 'movie-item'}>
      <div className="movie-info">
        <div className="movie-line">
          <span className="movie-title">{movie.title}</span>
          <span className={`badge badge-${movie.type}`}>{movie.type}</span>
          <span className={`badge badge-${movie.status}`}>{movie.status}</span>
          {movie.rating && (
            <span className="badge badge-rating">★ {movie.rating}/10</span>
          )}
        </div>
        {movie.note && <p className="movie-note">{movie.note}</p>}
      </div>
      <div className="movie-actions">
        <button type="button" onClick={() => onToggle(movie.id)}>
          {watched ? 'İzlenecek yap' : 'İzlendi ✓'}
        </button>
        <button type="button" onClick={() => onEdit(movie.id)}>
          Düzenle
        </button>
        <button type="button" className="danger" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </li>
  )
}

export default MovieItem
