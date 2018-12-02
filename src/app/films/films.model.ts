class FilmShortModel {
  poster: string;
  title: string;
  year: string;
  plot: string;
  genre: string;
  runtime: string;

  constructor(poster: string,
              title: string,
              year: string,
              plot: string,
              genre: string,
              runtime: string) {
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.plot = plot;
    this.runtime = runtime;
  }
}

class FilmFullModel {
  constructor() {
  }
}

export {
  FilmShortModel,
  FilmFullModel
};
