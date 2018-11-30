import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-films-content-item',
  templateUrl: './films-content-item.component.html',
  styleUrls: ['./films-content-item.component.scss']
})
export class FilmsContentItemComponent implements OnInit {

  @Input() name: string;
  @Input() info: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
