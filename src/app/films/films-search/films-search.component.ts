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
    if (localStorage.length) {
      const localTitle = localStorage.getItem('searchTitle');
      const title = localTitle ? JSON.parse(localTitle) : null;

      this.value = title;
    }
  }

  inputKeyPress(event) {
    const title = JSON.parse( localStorage.getItem('searchTitle') );

    this.value = event.target.value;

    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();

      if (this.value !== title) {
        this.getFilms(this.value);
      }
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
    this.search.emit(value);

    if (!value.length) {
      localStorage.clear();
    }
  }
}
