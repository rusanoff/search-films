import { Component } from '@angular/core';
import {FilmShortModel} from './films/films.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any = [];
  searching = false;
  loading = false;

  private imagePlaceholder = 'https://via.placeholder.com/200x240';

  constructor(private acRoute: ActivatedRoute) {
  }

  search(data) {
    if (data['Response'] === 'True') {
      this.data = data['Search'].map((film) => {
        const filmObj = new FilmShortModel('', '', '', '', '', '', '');

        filmObj.title = film['Title'];
        filmObj.year = film['Year'];
        filmObj.poster = film['Poster'] !== 'N/A' ? film['Poster'] : this.imagePlaceholder;
        filmObj.type = film['Type'] !== 'N/A' ? this.createFilmTypeValue(film['Type']) : 'Type is not found';

        return filmObj;
      });
    } else {
      this.data = [];
    }

    this.searching = !!this.data.length;
  }

  load(loading) {
    this.loading = loading;
  }

  canShowComponent(searching: boolean): boolean {
    return !this.loading && searching && !this.acRoute.snapshot.params.title;
  }

  private createFilmTypeValue(type: string): string {
    return type[0].toUpperCase() + type.slice(1);
  }
}
