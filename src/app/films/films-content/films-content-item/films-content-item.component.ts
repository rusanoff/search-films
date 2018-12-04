import { Component, OnInit, Input } from '@angular/core';
import {FilmShortModel} from '../../films.model';

@Component({
  selector: 'app-films-content-item',
  templateUrl: './films-content-item.component.html',
  styleUrls: ['./films-content-item.component.scss']
})
export class FilmsContentItemComponent implements OnInit {

  private errorSubstr = 'not found';

  @Input() film: FilmShortModel;

  constructor() { }

  ngOnInit() {
  }

  isNotFound(prop: string) {
    return prop && prop.indexOf(this.errorSubstr) !== -1;
  }

}
