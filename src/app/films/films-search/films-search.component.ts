import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.scss']
})
export class FilmsSearchComponent implements OnInit {
  value = '';

  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  @Output() load: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: FilmsService) {
  }

  ngOnInit() {
  }

  inputKeyPress(event) {
    this.value = event.target.value;

    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.getFilms(this.value);
    }
  }

  getFilms(value) {
    this.search.emit(value);

    // this.service.getFilms(value)
    //   .subscribe((data) => {
    //     this.search.emit(data);
    //     this.load.emit(false);
    //   }, (e) => {
    //     console.log(e);
    //   });
  }
}
