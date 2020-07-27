import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthService } from './services/auth.service';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageComponent
  ],
  providers: [
   // AuthService,
  ],
})
export class SharedModule { }
