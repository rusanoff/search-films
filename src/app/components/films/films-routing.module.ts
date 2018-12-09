import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsMainComponent } from './films-main/films-main.component';
import {FilmsDetailComponent} from './films-detail/films-detail.component';
import {NotFoundComponent} from '../not-found/not-found.component';

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
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found',
    data: {title: 'Страница не найлена'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
