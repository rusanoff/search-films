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
    if (localStorage.getItem('searchFilms')) {
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

  search(title: string) {
    this.searching = !!title;

    if (title.length) {
      this.service.getFilms(title).subscribe((data: FilmShortModel[]) => {
        this.data = data;

        this.setSearchStorage(this.data, title);
      });
    } else {
      this.data = [];
    }
  }

  setSearchStorage(data: FilmShortModel[], value: string) {
    const resultD = data.length ? JSON.stringify(data) : null;
    const resultV = value ? JSON.stringify(value) : null;

    if (resultD) {
      localStorage.setItem('searchFilms', resultD);
    }

    if (resultV) {
      localStorage.setItem('searchTitle', resultV);
    }
  }
}
