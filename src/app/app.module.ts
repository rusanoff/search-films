import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmsSearchComponent } from './films/films-search/films-search.component';
import { FilmsContentComponent } from './films/films-content/films-content.component';
import { FilmsContentItemComponent } from './films/films-content/films-content-item/films-content-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsSearchComponent,
    FilmsContentComponent,
    FilmsContentItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
