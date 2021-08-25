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

Cinema.prototype.filmByYear = function(year) {
  const films = this.films.some((film) => {
    return film.year == year
  })
  return films
}

Cinema.prototype.overLength = function(length) {
  const films = this.films.every((film) => {
    return film.length >= length;
  })
  return films
}

Cinema.prototype.totalRunning = function() {
  const total = this.films.reduce((runningTotal, filmLength) => {
    return runningTotal + filmLength.length
  }, 0)
  return total
}

Cinema.prototype.filter = function(category, value) {
  const films = this.films.filter((film) => {
    if (category == "title") {
      return film.title == value;
    } else if (category == "genre") {
      return film.genre == value;
    } else if (category == "length") {
      return film.length == value;
    } else {
      return film.year == value;
    }
  })
  return films
}

module.exports = Cinema;
