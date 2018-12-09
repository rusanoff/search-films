import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {AppComponent} from './app.component';
import {FilmsModule} from './components/films/films.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {ApikeyInterceptor} from './interceptors/apikey.interceptor';
import {AppLoadService} from './app.service';

export function loadFilms(service: AppLoadService) {
  return () => service.load();
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FilmsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApikeyInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadFilms,
      deps: [AppLoadService],
      multi: true
    }
  ]
})
export class AppModule {
}
