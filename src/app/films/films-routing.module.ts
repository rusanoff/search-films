import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListPageComponent } from './films-list-page/films-list-page.component';
import {FilmsDetailPageComponent} from './films-detail-page/films-detail-page.component';
import {NotFoundComponent} from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsListPageComponent
  },
  {
    path: 'films',
    component: FilmsListPageComponent
  },
  {
    path: 'films/:title',
    component: FilmsDetailPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
