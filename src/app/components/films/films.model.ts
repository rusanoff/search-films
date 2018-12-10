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
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writers: string;
  actors: string[];
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
  response: boolean;

  constructor(title: string,
              year: string,
              rated: string,
              released: string,
              runtime: string,
              genre: string,
              director: string,
              writers: string,
              actors: string[],
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
              production: string,
              response: boolean) {
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
    this.response = response;
  }
}

export {
  FilmShortModel,
  FilmFullModel
};
