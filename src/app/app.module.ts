import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {FilmsModule} from './components/films/films.module';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ApikeyInterceptor} from './interceptors/apikey.interceptor';
// import {AppLoadService} from './app.service';
// import {CapitalLetterPipe} from './pipes/capital-letter.pipe';
import {InputLatinSymbolsDirective} from './directives/input-latin-symbols.directive';

// export function loadFilms(service: AppLoadService) {
//   return () => service.load();
// }

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    // CapitalLetterPipe,
    InputLatinSymbolsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: '/not-found',
        data: {title: 'Страница не найлена'}
      }
    ]),
    FilmsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApikeyInterceptor,
      multi: true
    },
    // CapitalLetterPipe
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: loadFilms,
    //   deps: [AppLoadService],
    //   multi: true
    // }
  ]
})
export class AppModule {
}
