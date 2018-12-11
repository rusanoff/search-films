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
                film.id,
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
              film.poster = this.setValidValue(film.poster, IMAGE_PLACEHOLDER.LIST_ITEM);
            });

            return data.search;
          }

          return [];
        }));
  }

  getFilm(id): Observable<Object> {
    let params = new HttpParams();

    params = params.append('i', id);
    params = params.append('plot', 'full');

    return this.http.get(API.URL, {params})
      .pipe(map((data: any) => {
        data = humps.camelizeKeys(data);

        if (data.response === 'True') {
          const filmObj = new FilmFullModel(
            data.title,
            data.year,
            this.setValidDetailValue(data.rated),
            this.setValidDetailValue(data.released),
            this.setValidDetailValue(data.runtime),
            this.setValidDetailValue(data.genre),
            this.setValidDetailValue(data.director),
            this.setValidDetailValue(data.writer),
            this.setValidDetailValue(data.actors),
            this.setValidDetailValue(data.plot),
            this.setValidDetailValue(data.language),
            this.setValidDetailValue(data.country),
            this.setValidDetailValue(data.awards),
            this.setValidDetailValue(data.poster, IMAGE_PLACEHOLDER.DETAIL),
            data.ratings,
            this.setValidDetailValue(data.type),
            this.setValidDetailValue(data.dVD),
            this.setValidDetailValue(data.boxOffice),
            this.setValidDetailValue(data.production)
          );

          return filmObj;
        }

        return null;
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
              film.imdbID,
              this.setValidValue(film.poster, IMAGE_PLACEHOLDER.LIST_ITEM),
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

  private setValidDetailValue(value: string, defaultValue?: string) {
    return (value !== 'N/A') ? value : (typeof defaultValue !== 'undefined') ? defaultValue : null;
  }

  private createFilmTypeValue(type: string): string {
    return type[0].toUpperCase() + type.slice(1);
  }
}
