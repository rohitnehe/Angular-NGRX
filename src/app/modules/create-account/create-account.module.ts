import { NgModule } from '@angular/core';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SharedModule } from '../../shared/shared.module';
import { EmailCheckerDirective }  from '../../directives/EmailChecker';


@NgModule({
  declarations: [CreateAccountComponent,EmailCheckerDirective],
  imports: [
    CreateAccountRoutingModule,
    SharedModule
  ]
})
export class CreateAccountModule { }
