import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
