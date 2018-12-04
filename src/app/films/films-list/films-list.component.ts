import { Component, OnInit, Input } from '@angular/core';
import {FilmShortModel} from '../films.model';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  @Input() films: FilmShortModel[];

  constructor() { }

  ngOnInit() {
  }

}
