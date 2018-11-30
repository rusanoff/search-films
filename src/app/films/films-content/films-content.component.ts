import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-content',
  templateUrl: './films-content.component.html',
  styleUrls: ['./films-content.component.scss']
})
export class FilmsContentComponent implements OnInit {

  public films: any[];
  public defaults: any[] = [
    {
      name: 'Зеленая миля',
      info: 'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
      image: 'https://st.kp.yandex.net/images/film_iphone/iphone360_435.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.films = [...this.defaults, ...this.defaults, ...this.defaults, ...this.defaults];
  }

}
