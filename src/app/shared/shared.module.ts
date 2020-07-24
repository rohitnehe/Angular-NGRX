import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.states';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/effects/auth.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects])
  ]
})
export class SharedModule { }
