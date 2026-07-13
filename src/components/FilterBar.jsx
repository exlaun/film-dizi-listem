// Arama + tür ve durum filtreleri; state'i Home tutar, burası sadece gösterir.
function FilterBar({
  search,
  typeFilter,
  statusFilter,
  onSearchChange,
  onTypeChange,
  onStatusChange,
}) {
  return (
    <div className="filter-bar">
      <input
        type="search"
        placeholder="Başlıkta ara…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <label>
        Tür:
        <select value={typeFilter} onChange={(e) => onTypeChange(e.target.value)}>
          <option value="hepsi">Hepsi</option>
          <option value="film">Film</option>
          <option value="dizi">Dizi</option>
        </select>
      </label>
      <label>
        Durum:
        <select value={statusFilter} onChange={(e) => onStatusChange(e.target.value)}>
          <option value="hepsi">Hepsi</option>
          <option value="izlenecek">İzlenecek</option>
          <option value="izlendi">İzlendi</option>
        </select>
      </label>
    </div>
  )
}

export default FilterBar
