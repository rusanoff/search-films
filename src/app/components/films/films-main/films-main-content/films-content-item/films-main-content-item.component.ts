import { Component, Input } from '@angular/core';
import {FilmShortModel} from '../../../films.model';
import {UNDEFIND_VALUE} from '../../../../../app.constants';

@Component({
  selector: 'app-films-content-item',
  templateUrl: './films-main-content-item.component.html',
  styleUrls: ['./films-main-content-item.component.scss']
})
export class FilmsMainContentItemComponent {
  @Input() film: FilmShortModel;

  isNotFound(value: string) {
    return value && value === UNDEFIND_VALUE;
  }
}
