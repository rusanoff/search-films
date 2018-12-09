import {Component, Input} from '@angular/core';
import {FilmShortModel} from '../../../films.model';

@Component({
  selector: 'app-films-list-item',
  templateUrl: './films-main-list-item.component.html',
  styleUrls: ['./films-main-list-item.component.scss']
})
export class FilmsMainListItemComponent {
  private errorSubstr = 'is not found';

  @Input() film: FilmShortModel;

  isNotFound(prop: string) {
    return prop && prop.indexOf(this.errorSubstr) !== -1;
  }
}
