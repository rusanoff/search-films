import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmsService} from '../films.service';
import {Subscription} from 'rxjs';
import {FilmFullModel} from '../films.model';

@Component({
  selector: 'app-films-detail-page',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.scss']
})
export class FilmsDetailComponent implements OnInit {
  public film: FilmFullModel;

  private id: string;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private service: FilmsService) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.id = queryParam.id;
      }
    );
  }

  ngOnInit() {
    this.getFilm();
  }

  getFilm() {
    this.service.getFilm(this.id)
      .subscribe((data: FilmFullModel) => {
        this.film = data;
        console.log(this.film);
      }, (e) => {
        console.log(e);
      });
  }
}
