import { Injectable } from '@angular/core';
import { HttpReqMethod, ApiService } from '../services/api.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;

  constructor(private apiService: ApiService) { }

  // create user
  createAccount(userdata: object) {
    return this.apiService.Request(environment.serviceUrl + 'users/', HttpReqMethod.POST.toString(), userdata);
  }

  // validation messages for create user
  validationMessage() {
    return this.apiService.Request(environment.serviceUrl + 'validationMessage?key=create-account', HttpReqMethod.GET.toString());
  }

}
