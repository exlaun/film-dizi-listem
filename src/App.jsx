import { useEffect, useState } from 'react'
import Home from './pages/Home'
import './App.css'

const STORAGE_KEY = 'movies'

// LocalStorage'dan ilk yükleme; veri yoksa veya bozuksa boş listeyle başla.
function loadMovies() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

// Kayıt modeli:
// { id, title, type: "film" | "dizi", status: "izlenecek" | "izlendi",
//   rating: 1-10 | null, note: string }  (rating ve note opsiyonel)
function App() {
  const [movies, setMovies] = useState(loadMovies)

  // Her değişiklikte listeyi LocalStorage'a yaz
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies))
  }, [movies])

  // values: form'dan gelen { title, type, rating, note }
  function addMovie(values) {
    setMovies([
      ...movies,
      { id: crypto.randomUUID(), status: 'izlenecek', ...values },
    ])
  }

  function updateMovie(id, updates) {
    setMovies(movies.map((m) => (m.id === id ? { ...m, ...updates } : m)))
  }

  function toggleStatus(id) {
    setMovies(
      movies.map((m) =>
        m.id === id
          ? { ...m, status: m.status === 'izlendi' ? 'izlenecek' : 'izlendi' }
          : m
      )
    )
  }

  function deleteMovie(id) {
    setMovies(movies.filter((m) => m.id !== id))
  }

  return (
    <div className="app">
      <Home
        movies={movies}
        onAdd={addMovie}
        onUpdate={updateMovie}
        onToggle={toggleStatus}
        onDelete={deleteMovie}
      />
    </div>
  )
}

export default App
