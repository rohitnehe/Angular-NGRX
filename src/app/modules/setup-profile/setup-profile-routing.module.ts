import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { AddressComponent } from './address/address.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';

const routes: Routes = [
  {
    path: '', component: BioDetailsComponent
  },
  {
    path: 'profile-picture', component: ProfilePictureComponent
  },
  {
    path: 'address', component: AddressComponent
  },
  {
    path: 'security', component: SecurityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupProfileRoutingModule { }
