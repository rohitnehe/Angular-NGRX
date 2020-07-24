import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../app/shared/services/auth.service';
import { TokenInterceptor } from '../app/shared/services/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {SharedModule} from '../app/shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './shared/store/reducers/user.reducer';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: UserReducer
    })
  ]
  ,
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
