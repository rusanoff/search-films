import { Component, Input } from '@angular/core';
import {FilmShortModel} from '../../../films.model';

@Component({
  selector: 'app-films-content-item',
  templateUrl: './films-main-content-item.component.html',
  styleUrls: ['./films-main-content-item.component.scss']
})
export class FilmsMainContentItemComponent {

  private errorSubstr = 'not found';

  @Input() film: FilmShortModel;

  constructor() { }

  isNotFound(prop: string) {
    return prop && prop.indexOf(this.errorSubstr) !== -1;
  }

}
