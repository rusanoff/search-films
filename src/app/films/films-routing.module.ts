import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListPageComponent } from './films-list-page/films-list-page.component';
import { FilmsListItemDetailComponent } from './films-list/films-list-item-detail/films-list-item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsListPageComponent
  },
  {
    path: '/films',
    component: FilmsListPageComponent
  },
  {
    path: '/films/:title',
    component: FilmsListItemDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
