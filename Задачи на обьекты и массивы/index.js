const movies = [
  {
    title: "Звездные войны",
    year: 1977,
    genre: "Фантастика",
    rating: 8.6,
    duration: 120,
  },
  {
    title: "Назад в будущее",
    year: 1985,
    genre: "Фантастика",
    rating: 8.5,
    duration: 140,
  },
  {
    title: "Терминатор",
    year: 1984,
    genre: "Боевик",
    rating: 8.0,
    duration: 110,
  },
  {
    title: "Интерстеллар",
    year: 2014,
    genre: "Фантастика",
    rating: 8.6,
    duration: 80,
  },
  {
    title: "Властелин колец",
    year: 2001,
    genre: "Фэнтези",
    rating: 8.8,
    duration: 75,
  },
];

let newMovie = [
  {
    title: "Чужой",
    year: 1979,
    genre: "Ужасы",
    rating: 8.5,
  },
  {
    title: "Бегущий по лезвию",
    year: 1982,
    genre: "Фантастика",
    rating: 8.1,
  },
];

movies.push({
  title: "Матрица",
  year: 1999,
  genre: "Фантастика",
  rating: 8.7,
  duration: 110,
});

function getAllTitles(movies) {
  return movies.map((movie) => movie.title);
}
// console.log(getAllTitles(movies));

function getMoviesByGenre(movies) {
  return movies
    .filter((movie) => movie.genre === "Фантастика")
    .map((movie) => movie.title);
}
// console.log(getMoviesByGenre(movies));

function isMovieFromYear(movies, year) {
  return movies.some((movie) => movie.year === year);
}

// console.log(isMovieFromYear(movies));

function getTotalDuration(movies) {
  return movies.reduce((acc, movie) => acc + movie.duration, 0);
}
console.log(getTotalDuration(movies));

function movieString(movies) {
  return movies.map((movie) => `${movie.title} (${movie.year})`).join(", ");
}

function dellMovie() {
  return movies.filter((movie) => movie.title !== "Терминатор");
}

function updateMovieRating() {
  const movie = movies.find((movie) => movie.title === "Интерстеллар");
  if (movie) {
    movie.rating = 8.7;
  }
}

function sortMoviesByYear() {
  return movies.sort((a, b) => a.year - b.year);
}

function getUniqueGenres(movies) {
  const genres = movies.map((movie) => movie.genre);
  return Array.from(new Set(genres));
}

function dellMoviesTitle() {
  const index = movies.findIndex((movie) => movie.title === "Терминатор");
  if (index !== -1) {
    movies.splice(index, 1);
  }
}

function updateMovies(movies, newMovie) {
  return movies.splice(1, 2, ...newMovie);
}

module.exports = {
  movies,
  getAllTitles,
  getMoviesByGenre,
  isMovieFromYear,
  getTotalDuration,
  movieString,
  dellMovie,
  updateMovieRating,
  sortMoviesByYear,
  getUniqueGenres,
  dellMoviesTitle,
  updateMovies,
};
