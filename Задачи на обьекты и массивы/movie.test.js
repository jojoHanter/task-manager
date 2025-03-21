const {
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
  movies,
} = require("../Задачи на обьекты и массивы/index");

describe("Movie Utility Functions", () => {
  test("getAllTitles returns an array of movie titles", () => {
    expect(getAllTitles(movies)).toEqual([
      "Звездные войны",
      "Назад в будущее",
      "Терминатор",
      "Интерстеллар",
      "Властелин колец",
      "Матрица",
    ]);
  });

  test("getMoviesByGenre returns an array of movie titles by genre", () => {
    expect(getMoviesByGenre(movies, "Фантастика")).toEqual([
      "Звездные войны",
      "Назад в будущее",
      "Интерстеллар",
      "Матрица",
    ]);
  });

  test("returns true if there is a movie from the given year", () => {
    expect(isMovieFromYear(movies, 1984)).toBe(true);
    expect(isMovieFromYear(movies, 1999)).toBe(true);
    expect(isMovieFromYear(movies, 2014)).toBe(true);
  });

  test("returns false if there is no movie from the given year", () => {
    expect(isMovieFromYear(movies, 1980)).toBe(false);
    expect(isMovieFromYear(movies, 2023)).toBe(false);
  });

  test("getTotalDuration returns the total duration of all movies", () => {
    expect(getTotalDuration(movies)).toBe(635);
  });
});
