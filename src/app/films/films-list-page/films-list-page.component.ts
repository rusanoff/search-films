import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmShortModel} from '../films.model';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-films-list-page',
  templateUrl: './films-list-page.component.html',
  styleUrls: ['./films-list-page.component.scss']
})
export class FilmsListPageComponent implements OnInit {
  data: FilmShortModel[];
  searching = false;
  loading = false;

  constructor(private acRoute: ActivatedRoute,
              private service: FilmsService) {
  }

  ngOnInit() {
    if (localStorage.length) {
      this.data = JSON.parse(localStorage.getItem('searchFilms'));
      this.searching = true;
    }
  }

  load(loading) {
    this.loading = loading;
  }

  canShowComponent(searching: boolean): boolean {
    return !this.loading && searching && !this.acRoute.snapshot.params.title;
  }

  search(title) {
    this.service.getFilms(title).subscribe((data: FilmShortModel[]) => {
      this.data = data;
      this.searching = !!this.data.length;
      this.setSearchStorage(this.data, title);
    });
  }

  setSearchStorage(data: FilmShortModel[], value: string) {
    const result = data.length ? JSON.stringify(data) : null;
    const resultV = value ? JSON.stringify(value) : null;

    if (result && value.length) {
      localStorage.setItem('searchFilms', result);
      localStorage.setItem('searchTitle', resultV);
    }
  }
}
