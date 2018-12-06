import {Component, Input, OnInit} from '@angular/core';
import {FilmShortModel} from '../../films.model';

@Component({
  selector: 'app-films-list-item',
  templateUrl: './films-list-item.component.html',
  styleUrls: ['./films-list-item.component.scss']
})
export class FilmsListItemComponent implements OnInit {
  private errorSubstr = 'is not found';

  @Input() film: FilmShortModel;

  constructor() {
  }

  ngOnInit() {
  }

  isNotFound(prop: string) {
    return prop && prop.indexOf(this.errorSubstr) !== -1;
  }
}
