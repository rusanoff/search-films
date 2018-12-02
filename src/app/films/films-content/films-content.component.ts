import { Component, OnInit, Input} from '@angular/core';
import {FilmShortModel} from '../films.model';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-films-content',
  templateUrl: './films-content.component.html',
  styleUrls: ['./films-content.component.scss']
})
export class FilmsContentComponent implements OnInit {

  @Input() films: FilmShortModel[];

  private imagePlaceholder = 'https://via.placeholder.com/200x240';

  constructor(private service: FilmsService) { }

  ngOnInit() {
    this.getRandomFilms();
  }

  getRandomFilms() {
    this.service.getRandomFilms().subscribe((films) => {
      this.films = films.map((film) => {
        const filmObj = new FilmShortModel('', '', '', '', '', '');

        filmObj.title = film['Title'];
        filmObj.year = film['Year'];
        filmObj.plot = this.setValidValue(film, 'Plot');
        filmObj.runtime = this.setValidValue(film, 'Runtime');
        filmObj.poster = film['Poster'] !== 'N/A' ? film['Poster'] : this.imagePlaceholder;
        filmObj.genre = this.setValidValue(film, 'Genre');

        if (filmObj.plot.length > 100) {
            filmObj.plot = `${filmObj.plot.slice(0, 97)}...`;
        }

        return filmObj;
      });
    });
  }

  private setValidValue(obj: any, prop: string) {
    return obj[prop] !== 'N/A' ? obj[prop] : `${prop} is not found`;
  }

}
