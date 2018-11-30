import {Component, OnInit} from '@angular/core';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.scss']
})
export class FilmsSearchComponent implements OnInit {
  value = '';
  film = '';

  constructor(private service: FilmsService) {
  }

  ngOnInit() {
  }

  inputKeyPress(event) {
    this.value = event.target.value;

    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.getFilm(this.value);
    }
  }

  getFilm(value) {
    this.service.getFilm(value)
      .subscribe((data) => {
        console.log(data);
      }, (e) => {
        console.log(e);
      });
  }
}
