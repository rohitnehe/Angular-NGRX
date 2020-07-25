import { Injectable } from '@angular/core';
import { HttpReqMethod, ApiService } from '../services/api.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  // validation messages for create user
  signupValidationMessage() {
    return this.apiService.Request(environment.serviceUrl + 'validationMessage?key=create-account', HttpReqMethod.GET.toString());
  }

  loginValidationMessage() {
    console.log(environment.serviceUrl + 'validationMessage?key=login');
    return this.apiService.Request(environment.serviceUrl + 'validationMessage?key=login', HttpReqMethod.GET.toString());
  }

}
