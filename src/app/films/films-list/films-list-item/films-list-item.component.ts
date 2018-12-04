import {Component, Input, OnInit} from '@angular/core';
import {FilmShortModel} from '../../films.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-films-list-item',
  templateUrl: './films-list-item.component.html',
  styleUrls: ['./films-list-item.component.scss']
})
export class FilmsListItemComponent implements OnInit {
  private errorSubstr = 'not found';

  @Input() film: FilmShortModel;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  isNotFound(prop: string) {
    return prop && prop.indexOf(this.errorSubstr) !== -1;
  }

  changeFilm(film) {
    this.router.navigate(['/films', film.requestParam]);
  }
}
