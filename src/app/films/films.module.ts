import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsListPageComponent } from './films-list-page/films-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule
  ],
  declarations: [FilmsListPageComponent]
})
export class FilmsModule { }
