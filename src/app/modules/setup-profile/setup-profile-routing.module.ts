import { ProfileSetupCompleteComponent } from './profile-setup-complete/profile-setup-complete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { AddressComponent } from './address/address.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import { AuthGuardService as AuthGuard} from '../../shared/services/auth.guard.service';


const routes: Routes = [
  {
    path: '', component: BioDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile-picture', component: ProfilePictureComponent, canActivate: [AuthGuard]
  },
  {
    path: 'address', component: AddressComponent, canActivate: [AuthGuard]
  },
  {
    path: 'security', component: SecurityComponent, canActivate: [AuthGuard]
  },

  {
    path: 'profile-setup-complete', component: ProfileSetupCompleteComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupProfileRoutingModule { }
