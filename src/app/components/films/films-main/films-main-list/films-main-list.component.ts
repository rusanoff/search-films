import { Component, Input } from '@angular/core';
import {FilmShortModel} from '../../films.model';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-main-list.component.html',
  styleUrls: ['./films-main-list.component.scss']
})
export class FilmsMainListComponent {

  @Input() films: FilmShortModel[];

  haveData(films: FilmShortModel[]): boolean {
    return this.films && !!films.length;
  }
}
