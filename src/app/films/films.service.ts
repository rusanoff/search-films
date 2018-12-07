import * as humps from 'humps';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {forkJoin, Observable, Observer} from 'rxjs';
import {map} from 'rxjs/operators';
import {FilmShortModel} from './films.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private url = 'http://www.omdbapi.com';
  private apikey = 'e1ec7fad';
  private randomFilmsCount = 4;
  private imagePlaceholder = 'https://via.placeholder.com/200x240';

  constructor(private http: HttpClient) {
  }

  getFilms(name: string): Observable<Object> {
      let params = new HttpParams();

      params = params.append('s', name);
      params = params.append('apikey', this.apikey);

      return this.http.get(`${this.url}`, {params})
        .pipe(map((data: any) => {
          if (data['Response'] === 'True') {
            data['Search'].map((film) => {
              return new FilmShortModel(
                film['Poster'],
                film['Title'],
                film['Year'],
                '',
                '',
                '',
                film['Type']
              );
            });

            data['Search'].map((film) => {
              film['Type'] = this.createFilmTypeValue(film['Type']);
              film['Poster'] = this.setValidValue(film, 'Poster', this.imagePlaceholder);
            });

            return humps.camelizeKeys(data['Search']);
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
    params = params.append('apikey', this.apikey);

    return this.http.get(`${this.url}`, {params})
      .pipe(map((data) => {
        return humps.camelizeKeys(data);
      }));
  }

  getRandomFilms() {
    const observables = [];

    for (let i = 0; i < this.randomFilmsCount; i++) {
      let params = new HttpParams();

      params = params.append('i', this.generateFilmId());
      params = params.append('apikey', this.apikey);

      observables.push(this.http.get(`${this.url}`, {params})
        .pipe(map((film) => {
          if (film['Response'] === 'True') {
            const filmObj = new FilmShortModel(
              this.setValidValue(film, 'Poster', this.imagePlaceholder),
              film['Title'],
              film['Year'],
              this.setValidValue(film, 'Plot'),
              this.setValidValue(film, 'Genre'),
              this.setValidValue(film, 'Runtime'),
              film['Type']
            );

            if (filmObj.plot && filmObj.plot.length > 100) {
              filmObj.plot = `${filmObj.plot.slice(0, 97)}...`;
            }

            if (filmObj.type === 'N/A') {
              filmObj.type = '';
            }

            return filmObj;
          } else {
            return new FilmShortModel('', '', '', '', '' , '');
          }
        })));
    }

    return forkJoin(observables);
  }

  private generateFilmId(): string {
    let idValidPart = '';

    for (let i = 0; i < 6; i++) {
      idValidPart += Math.floor(Math.random() * 10).toString();
    }

    return `tt0${idValidPart}`;
  }

  private setValidValue(obj: any, prop: string, defaultValue?: string): string {
    return (obj[prop] && obj[prop] !== 'N/A') ? obj[prop] : defaultValue ? defaultValue : `${prop} is not found`;
  }

  private createFilmTypeValue(type: string): string {
    return type[0].toUpperCase() + type.slice(1);
  }
}
