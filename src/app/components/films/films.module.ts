import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilmsRoutingModule} from './films-routing.module';
import {FilmsMainComponent} from './films-main/films-main.component';
import {FilmsMainListComponent} from './films-main/films-main-list/films-main-list.component';
import {FilmsDetailComponent} from './films-detail/films-detail.component';
import {FilmsMainListItemComponent} from './films-main/films-main-list/films-list-item/films-main-list-item.component';
import {FilmsMainSearchComponent} from './films-main/films-main-search/films-main-search.component';
import {FilmsMainContentComponent} from './films-main/films-main-content/films-main-content.component';
import {FilmsMainContentItemComponent} from './films-main/films-main-content/films-content-item/films-main-content-item.component';
import {LoaderComponent} from '../loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule,
  ],
  declarations: [
    FilmsMainComponent,
    FilmsDetailComponent,
    FilmsMainListComponent,
    FilmsMainSearchComponent,
    FilmsMainContentComponent,
    FilmsMainContentItemComponent,
    FilmsMainListComponent,
    FilmsMainListItemComponent,
    LoaderComponent,
    FilmsMainComponent,
    FilmsDetailComponent,
  ]
})
export class FilmsModule {
}
