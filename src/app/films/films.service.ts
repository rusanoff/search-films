import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private url = 'http://www.omdbapi.com';
  private apikey = 'e1ec7fad';

  constructor(private http: HttpClient) {
  }

  getDefaultFilms() {

  }

  getFilm(name) {
    let params = new HttpParams();

    params = params.append('s', name);
    params = params.append('apikey', this.apikey);

    return this.http.get(`${this.url}`, {params});
  }

  private generateFilmId() {
    let idValidPart = '';

    for (let i = 0; i < 6; i++) {
      idValidPart += Math.floor(Math.random() * 10).toString();
    }

    return `tt0${idValidPart}`;
  }
}
