import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor, ErrorInterceptor } from './interceptor/token.interceptor';
import { AuthGuardService as AuthGuard } from './auth/auth.guard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
})
export class HelperModule { }
