import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsMainComponent } from './films-main/films-main.component';
import {FilmsDetailComponent} from './films-detail/films-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsMainComponent
  },
  {
    path: 'films',
    component: FilmsMainComponent
  },
  {
    path: 'films/:title',
    component: FilmsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
