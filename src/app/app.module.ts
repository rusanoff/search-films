import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmsSearchComponent } from './films/films-search/films-search.component';
import { FilmsContentComponent } from './films/films-content/films-content.component';
import { FilmsContentItemComponent } from './films/films-content/films-content-item/films-content-item.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmsListItemComponent } from './films/films-list/films-list-item/films-list-item.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { FilmsListItemDetailComponent } from './films/films-list/films-list-item-detail/films-list-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsSearchComponent,
    FilmsContentComponent,
    FilmsContentItemComponent,
    FilmsListComponent,
    FilmsListItemComponent,
    LoaderComponent,
    FilmsListItemDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'films/:title',
        component: FilmsListItemDetailComponent
      },
      {
        path: 'films',
        component: FilmsContentComponent
      },
      {
        path: '',
        component: FilmsContentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
