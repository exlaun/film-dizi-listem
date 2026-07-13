import { useState } from 'react'

const PUANLAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Ekleme ve düzenleme için ortak form.
// initial doluysa düzenleme modundayız: buton "Kaydet" olur, "Vazgeç" görünür.
function MovieForm({ onSubmit, initial, onCancel }) {
  const [title, setTitle] = useState(initial ? initial.title : '')
  const [type, setType] = useState(initial ? initial.type : 'film')
  const [rating, setRating] = useState(initial?.rating ?? '')
  const [note, setNote] = useState(initial?.note ?? '')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onSubmit({
      title: trimmed,
      type,
      rating: rating === '' ? null : Number(rating),
      note: note.trim(),
    })
    if (!initial) {
      setTitle('')
      setType('film')
      setRating('')
      setNote('')
    }
  }

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="Film veya dizi adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="film">Film</option>
          <option value="dizi">Dizi</option>
        </select>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Puan (ops.)</option>
          {PUANLAR.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <input
          type="text"
          placeholder="Not (opsiyonel)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit" className="primary">
          {initial ? 'Kaydet' : 'Ekle'}
        </button>
        {initial && (
          <button type="button" onClick={onCancel}>
            Vazgeç
          </button>
        )}
      </div>
    </form>
  )
}

export default MovieForm
