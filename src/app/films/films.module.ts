import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilmsRoutingModule} from './films-routing.module';
import {FilmsListPageComponent} from './films-list-page/films-list-page.component';
import {FilmsListComponent} from './films-list/films-list.component';
import {FilmsDetailPageComponent} from './films-detail-page/films-detail-page.component';
import {FilmsListItemComponent} from './films-list/films-list-item/films-list-item.component';
import {FilmsSearchComponent} from './films-search/films-search.component';
import {FilmsContentComponent} from './films-content/films-content.component';
import {FilmsContentItemComponent} from './films-content/films-content-item/films-content-item.component';
import {LoaderComponent} from '../loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule,
  ],
  declarations: [
    FilmsListPageComponent,
    FilmsDetailPageComponent,
    FilmsListComponent,
    FilmsSearchComponent,
    FilmsContentComponent,
    FilmsContentItemComponent,
    FilmsListComponent,
    FilmsListItemComponent,
    LoaderComponent,
    FilmsListPageComponent,
    FilmsDetailPageComponent,
  ]
})
export class FilmsModule {
}
