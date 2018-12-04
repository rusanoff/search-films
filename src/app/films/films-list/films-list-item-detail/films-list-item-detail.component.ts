import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmsService} from '../../films.service';

@Component({
  selector: 'app-films-list-item-detail',
  templateUrl: './films-list-item-detail.component.html',
  styleUrls: ['./films-list-item-detail.component.scss']
})
export class FilmsListItemDetailComponent implements OnInit {
  public film: any;

  @Input() filmObj: any;

  constructor(private route: ActivatedRoute,
              private service: FilmsService) {
  }

  ngOnInit() {
    this.getFilm();
  }

  getFilm() {
    // const title = this.route.snapshot.params.title;

    this.service.getFilm(this.filmObj)
      .subscribe((data) => {
        this.film = data;
        console.log(this.film);
      }, (e) => {
        console.log(e);
      });
  }

}
