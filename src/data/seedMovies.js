// Uygulama ilk açıldığında (LocalStorage boşken) gösterilecek örnek kayıtlar.
// Marvel film ve dizilerinden karışık bir liste; kullanıcı ekleyip sildikçe
// yerini LocalStorage'daki gerçek veriye bırakır.
const seedMovies = [
  {
    id: 'seed-1',
    title: 'Avengers: Endgame',
    type: 'film',
    status: 'izlendi',
    rating: 10,
    note: 'Destansı final, sinemada izledim.',
  },
  {
    id: 'seed-2',
    title: 'Iron Man',
    type: 'film',
    status: 'izlendi',
    rating: 9,
    note: 'Her şeyin başladığı film.',
  },
  {
    id: 'seed-3',
    title: 'Spider-Man: No Way Home',
    type: 'film',
    status: 'izlendi',
    rating: 9,
    note: 'Üç Örümcek-Adam bir arada!',
  },
  {
    id: 'seed-4',
    title: 'Black Panther',
    type: 'film',
    status: 'izlendi',
    rating: 8,
    note: '',
  },
  {
    id: 'seed-5',
    title: 'Deadpool & Wolverine',
    type: 'film',
    status: 'izlenecek',
    rating: null,
    note: 'Sinemada kaçırdım, izlemem lazım.',
  },
  {
    id: 'seed-6',
    title: 'Loki',
    type: 'dizi',
    status: 'izlendi',
    rating: 9,
    note: 'İki sezon da çok iyi.',
  },
  {
    id: 'seed-7',
    title: 'WandaVision',
    type: 'dizi',
    status: 'izlendi',
    rating: 8,
    note: '',
  },
  {
    id: 'seed-8',
    title: 'Daredevil: Born Again',
    type: 'dizi',
    status: 'izlenecek',
    rating: null,
    note: '',
  },
]

export default seedMovies
