import { Injectable } from '@angular/core';
import { HttpReqMethod, ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { ValidationMessage } from '../models/validation-message.model';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  // validation messages for create user
  signupValidationMessage(): Observable<ValidationMessage> {
    return this.apiService.Request(environment.serviceUrl + 'validationMessage?key=create-account', HttpReqMethod.GET.toString());
  }

  loginValidationMessage(): Observable<ValidationMessage> {
    return this.apiService.Request(environment.serviceUrl + 'validationMessage?key=login', HttpReqMethod.GET.toString());
  }

}
