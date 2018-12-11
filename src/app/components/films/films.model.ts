class FilmShortModel {
  id: string;
  poster: string;
  title: string;
  year: string;
  plot: string;
  genre: string;
  runtime: string;
  type?: string;
  requestParam?: string;

  constructor(id: string,
              poster: string,
              title: string,
              year: string,
              plot: string,
              genre: string,
              runtime: string,
              type?: string,
              requestParam?: string) {
    this.id = id;
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
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writers: string;
  actors: any;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: {
    source: string,
    value: string
  }[];
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;

  constructor(title: string,
              year: string,
              rated: string,
              released: string,
              runtime: string,
              genre: string,
              director: string,
              writers: string,
              actors: any,
              plot: string,
              language: string,
              country: string,
              awards: string,
              poster: string,
              ratings: {
                source: string,
                value: string
              }[],
              type: string,
              dvd: string,
              boxOffice: string,
              production: string) {
    this.title = title;
    this.year = year;
    this.rated = rated;
    this.released = released;
    this.runtime = runtime;
    this.genre = genre;
    this.director = director;
    this.writers = writers;
    this.actors = actors;
    this.plot = plot;
    this.language = language;
    this.country = country;
    this.awards = awards;
    this.poster = poster;
    this.ratings = ratings;
    this.type = type;
    this.dvd = dvd;
    this.boxOffice = boxOffice;
    this.production = production;
  }
}

export {
  FilmShortModel,
  FilmFullModel
};
