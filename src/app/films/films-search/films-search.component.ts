import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.scss']
})
export class FilmsSearchComponent implements OnInit {
  value = '';

  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  @Output() load: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    const localTitle = localStorage.getItem('searchTitle');

    if (localTitle) {
      this.value = JSON.parse(localTitle);
    } else {
      this.value = '';
    }
  }

  inputKeyPress(event) {
    this.value = event.target.value;

    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();

      this.getFilms(this.value);
    }
  }

  inputBlur(event) {
    const title = localStorage.getItem('searchTitle');

    this.value = event.target.value;

    if (!this.value.length && title) {
      this.getFilms(this.value);
    }
  }

  getFilms(value: string) {
    const title = JSON.parse( localStorage.getItem('searchTitle') );

    if (value !== title) {
      this.search.emit(value);
    }

    if (!value.length) {
      localStorage.clear();
    }
  }
}
