import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmShortModel} from '../films.model';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-films-list-page',
  templateUrl: './films-list-page.component.html',
  styleUrls: ['./films-list-page.component.scss']
})
export class FilmsListPageComponent implements OnInit {
  data: any = [];
  searching = false;
  loading = false;

  constructor(private acRoute: ActivatedRoute,
              private service: FilmsService) {
  }

  ngOnInit() {
  }

  load(loading) {
    this.loading = loading;
  }

  canShowComponent(searching: boolean): boolean {
    return !this.loading && searching && !this.acRoute.snapshot.params.title;
  }

  search(title) {
    this.service.getFilms(title).subscribe((data) => {
      this.data = data;
    });

    this.searching = !!this.data.length;
  }

  private createFilmTypeValue(type: string): string {
    return type[0].toUpperCase() + type.slice(1);
  }
}
