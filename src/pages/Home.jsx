import { useState } from 'react'
import MovieForm from '../components/MovieForm'
import FilterBar from '../components/FilterBar'
import MovieList from '../components/MovieList'

// Sayfa düzeni ve görünüm durumu: arama + filtreler + düzenleme modu.
function Home({ movies, onAdd, onUpdate, onToggle, onDelete }) {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('hepsi')
  const [statusFilter, setStatusFilter] = useState('hepsi')
  const [editingId, setEditingId] = useState(null)

  const editingMovie = movies.find((m) => m.id === editingId) ?? null
  const watchedCount = movies.filter((m) => m.status === 'izlendi').length

  // Türkçe karakterlere uygun küçük harf karşılaştırması (İ → i)
  const query = search.trim().toLocaleLowerCase('tr')
  const filtered = movies.filter(
    (m) =>
      (typeFilter === 'hepsi' || m.type === typeFilter) &&
      (statusFilter === 'hepsi' || m.status === statusFilter) &&
      m.title.toLocaleLowerCase('tr').includes(query)
  )

  // Düzenleme modundaysak formu güncelleme için, değilsek ekleme için kullan
  function handleSubmit(values) {
    if (editingMovie) {
      onUpdate(editingMovie.id, values)
      setEditingId(null)
    } else {
      onAdd(values)
    }
  }

  return (
    <>
      <header className="app-header">
        <h1>🎬 Film & Dizi İzleme Listesi</h1>
        <p className="stats">
          {movies.length} kayıt · {watchedCount} izlendi ·{' '}
          {movies.length - watchedCount} izlenecek
        </p>
      </header>
      {/* key: düzenlenen kayıt değişince form içi state sıfırlansın */}
      <MovieForm
        key={editingId ?? 'yeni'}
        initial={editingMovie}
        onSubmit={handleSubmit}
        onCancel={() => setEditingId(null)}
      />
      <FilterBar
        search={search}
        typeFilter={typeFilter}
        statusFilter={statusFilter}
        onSearchChange={setSearch}
        onTypeChange={setTypeFilter}
        onStatusChange={setStatusFilter}
      />
      <MovieList
        movies={filtered}
        emptyMessage={
          movies.length === 0
            ? 'Henüz kayıt yok. Yukarıdaki formdan ilk filmini ekle!'
            : 'Aramana / filtrene uyan kayıt yok.'
        }
        onToggle={onToggle}
        onEdit={setEditingId}
        onDelete={onDelete}
      />
    </>
  )
}

export default Home
