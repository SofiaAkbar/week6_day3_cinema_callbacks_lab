const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = this.films.map((film) => {
    return film.title
  })
  return titles
}

Cinema.prototype.findFilm = function(filmTitle) {
  const film = this.films.filter((film) => {
    return film.title == filmTitle
  })
  return film[0]
}

Cinema.prototype.byGenre = function(genre) {
  const films = this.films.filter((film) => {
    return film.genre == genre
  })
  return films
}


module.exports = Cinema;
