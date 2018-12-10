// import {Injectable} from '@angular/core';
// import {HttpClient, HttpParams} from '@angular/common/http';
// import {map} from 'rxjs/internal/operators';
// import {forkJoin} from 'rxjs';
// import {FilmShortModel} from './components/films/films.model';
// import {FilmsService} from './components/films/films.service';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AppLoadService {
//   private randomFilmsCount = 4;
//   private url = 'http://www.omdbapi.com';
//   private imagePlaceholder = 'https://via.placeholder.com/200x240';
//   private _films: any;
//
//   constructor(private http: HttpClient,
//               private service: FilmsService) { }
//
//   get films(): any {
//     return this._films;
//   }
//
//   load(): Promise<any> {
//
//     this._films = null;
//
//     return this.getRandomFilms()
//       .toPromise()
//       .then((data: any) => {
//         this._films = data;
//         localStorage.setItem('recommendedFilms', JSON.stringify(this._films));
//       })
//       .catch((err: any) => Promise.resolve());
//   }
//
//   getRandomFilms() {
//     const observables = [];
//
//     for (let i = 0; i < this.randomFilmsCount; i++) {
//       let params = new HttpParams();
//
//       params = params.append('i', this.generateFilmId());
//
//       observables.push(this.http.get(`${this.url}`, {params})
//         .pipe(map((film) => {
//           if (film['Response'] === 'True') {
//             const filmObj = new FilmShortModel(
//               this.service.setValidValue(film, 'Poster', this.imagePlaceholder),
//               film['Title'],
//               film['Year'],
//               this.service.setValidValue(film, 'Plot'),
//               this.service.setValidValue(film, 'Genre'),
//               this.service.setValidValue(film, 'Runtime'),
//               film['Type']
//             );
//
//             if (filmObj.plot && filmObj.plot.length > 100) {
//               filmObj.plot = `${filmObj.plot.slice(0, 97)}...`;
//             }
//
//             if (filmObj.type === 'N/A') {
//               filmObj.type = '';
//             }
//
//             return filmObj;
//           } else {
//             return new FilmShortModel('', '', '', '', '' , '');
//           }
//         })));
//     }
//
//     return forkJoin(observables);
//   }
//
//   private generateFilmId(): string {
//     let idValidPart = '';
//
//     for (let i = 0; i < 6; i++) {
//       idValidPart += Math.floor(Math.random() * 10).toString();
//     }
//
//     return `tt0${idValidPart}`;
//   }
// }
