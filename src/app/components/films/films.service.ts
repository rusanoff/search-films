import * as humps from 'humps';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FilmFullModel, FilmShortModel} from './films.model';
import {API, IMAGE_PLACEHOLDER, UNDEFIND_VALUE} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private randomFilmsCount = 4;

  constructor(private http: HttpClient) {
  }

  getFilms(name: string): Observable<Object> {
      let params = new HttpParams();

      params = params.append('s', name);

      return this.http.get(API.URL, {params})
        .pipe(map((data: any) => {
          data = humps.camelizeKeys(data);

          if (data.response === 'True') {
            data.search.map( (film) => {
              return new FilmShortModel(
                film.poster,
                film.title,
                film.year,
                '',
                '',
                '',
                film.type
              );
            });

            data.search.map((film) => {
              film.type = this.createFilmTypeValue(film.type);
              film.poster = this.setValidValue(film.poster, IMAGE_PLACEHOLDER);
            });

            return data.search;
          }

          return [];
        }));
  }

  getFilm(film): Observable<Object> {
    let params = new HttpParams();

    params = params.append('t', film.title);
    params = params.append('y', film.year);
    params = params.append('type', film.type);
    params = params.append('plot', 'full');

    return this.http.get(API.URL, {params})
      .pipe(map((data: FilmFullModel) => {
        return humps.camelizeKeys(data);

        // const responseData = humps.camelizeKeys(data);

        // responseData = data.response = (<any>data.response) === 'True';
        // responseData = data.dvd = data.dVD;
        //
        // if (data.response) {
        //   const film = new FilmFullModel(
        //     data.title,
        //     data.year,
        //     data.rated,
        //     data.released,
        //     data.runtime,
        //     data.genre,
        //     data.director,
        //     data.writers,
        //     data.actors,
        //     data.plot,
        //     data.language,
        //     data.country,
        //     data.awards,
        //     data.poster,
        //     data.ratings,
        //     data.type,
        //     data.dvd,
        //     data.boxOffice,
        //     data.production,
        //     data.response
        //   );
        //
        //   return film;
        // }
        // return null;
      }));
  }

  getRandomFilms() {
    const observables = [];

    for (let i = 0; i < this.randomFilmsCount; i++) {
      let params = new HttpParams();

      params = params.append('i', this.generateFilmId());

      observables.push(this.http.get(API.URL, {params})
        .pipe(map((film: any) => {
          film = humps.camelizeKeys(film);

          if (film.response === 'True') {
            const filmObj = new FilmShortModel(
              this.setValidValue(film.poster, IMAGE_PLACEHOLDER),
              film.title,
              film.year,
              this.setValidValue(film.plot),
              this.setValidValue(film.genre),
              this.setValidValue(film.runtime),
              this.setValidValue(film.type, '')
            );

            if (filmObj.plot && filmObj.plot.length > 100) {
              filmObj.plot = `${filmObj.plot.slice(0, 97)}...`;
            }

            return filmObj;
          }

          return null;
        })));
    }

    return forkJoin(observables);
  }

  setValidValue(propValue: string, defaultValue?: string): string {
    return (propValue && propValue !== 'N/A') ? propValue : (typeof defaultValue !== 'undefined') ? defaultValue : UNDEFIND_VALUE;
  }

  private generateFilmId(): string {
    let idValidPart = '';

    for (let i = 0; i < 6; i++) {
      idValidPart += Math.floor(Math.random() * 10).toString();
    }

    return `tt0${idValidPart}`;
  }

  private createFilmTypeValue(type: string): string {
    return type[0].toUpperCase() + type.slice(1);
  }
}
