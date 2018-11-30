import { Component, OnInit, Input } from '@angular/core';
import {FilmShortModel} from '../../films.model';

@Component({
  selector: 'app-films-content-item',
  templateUrl: './films-content-item.component.html',
  styleUrls: ['./films-content-item.component.scss']
})
export class FilmsContentItemComponent implements OnInit {

  @Input() film: FilmShortModel;

  constructor() { }

  ngOnInit() {
  }

}
