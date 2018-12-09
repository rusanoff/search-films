class FilmShortModel {
  poster: string;
  title: string;
  year: string;
  plot: string;
  genre: string;
  runtime: string;
  type?: string;
  requestParam?: string;

  constructor(poster: string,
              title: string,
              year: string,
              plot: string,
              genre: string,
              runtime: string,
              type?: string,
              requestParam?: string) {
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.plot = plot;
    this.runtime = runtime;
    this.type = type;
    this.requestParam = requestParam;
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
