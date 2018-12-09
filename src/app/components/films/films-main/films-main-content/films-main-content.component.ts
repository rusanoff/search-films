import { Component, OnInit} from '@angular/core';
import {FilmShortModel} from '../../films.model';
import {FilmsService} from '../../films.service';

@Component({
  selector: 'app-films-content',
  templateUrl: './films-main-content.component.html',
  styleUrls: ['./films-main-content.component.scss']
})
export class FilmsMainContentComponent implements OnInit {
  films: FilmShortModel[];

  constructor(private service: FilmsService) { }

  ngOnInit() {
    // this.getRandomFilms();
  }

  getRandomFilms() {
    this.service.getRandomFilms().subscribe((films) => {
      this.films = films;
    });
  }
}
