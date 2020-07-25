import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupProfileRoutingModule } from './setup-profile-routing.module';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { AddressComponent } from './address/address.component';
import { SecurityComponent } from './security/security.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [BioDetailsComponent, ProfilePictureComponent, AddressComponent, SecurityComponent],
  imports: [
    CommonModule,
    SetupProfileRoutingModule,
    SharedModule
  ]
})
export class SetupProfileModule { }
