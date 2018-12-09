import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmsService} from '../films.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-films-detail-page',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.scss']
})
export class FilmsDetailComponent implements OnInit {
  public film: any = {};
  public filmObj: any = {
    title: '',
    year: '',
    type: ''
  };

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private service: FilmsService) {
    this.routeSubscription = route.params.subscribe(params => {
      this.filmObj.title = params.title;
    });
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.filmObj.year = queryParam.year;
        this.filmObj.type = queryParam.type;
      }
    );
  }

  ngOnInit() {
    this.getFilm();
  }

  getFilm() {
    this.service.getFilm(this.filmObj)
      .subscribe((data) => {
        this.film = data;
      }, (e) => {
        console.log(e);
      });
  }
}
