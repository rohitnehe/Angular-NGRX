import { NgModule } from '@angular/core';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CreateAccountRoutingModule,
    SharedModule
  ]
})
export class CreateAccountModule { }
