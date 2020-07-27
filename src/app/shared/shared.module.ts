import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthService } from './services/auth.service';
import { AuthGuardService as AuthGuard } from './services/auth.guard.service';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects])
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
})
export class SharedModule { }
