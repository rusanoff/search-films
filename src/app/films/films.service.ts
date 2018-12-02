import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {forkJoin, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private url = 'http://www.omdbapi.com';
  private apikey = 'e1ec7fad';
  private randomFilmsCount = 4;

  constructor(private http: HttpClient) {
  }

  getFilm(name: string) {
    let params = new HttpParams();

    params = params.append('s', name);
    params = params.append('apikey', this.apikey);

    return this.http.get(`${this.url}`, {params});
  }

  getRandomFilms() {

    const observables = [];

    for (let i = 0; i < this.randomFilmsCount; i++) {
      let params = new HttpParams();

      params = params.append('i', this.generateFilmId());
      params = params.append('apikey', this.apikey);

      observables.push(this.http.get(`${this.url}`, {params}));
    }

    return forkJoin(observables);
  }

  private generateFilmId() {
    let idValidPart = '';

    for (let i = 0; i < 6; i++) {
      idValidPart += Math.floor(Math.random() * 10).toString();
    }

    return `tt0${idValidPart}`;
  }
}
