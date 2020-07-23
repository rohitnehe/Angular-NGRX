import { Injectable } from '@angular/core';
import { HttpReqMethod, ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  createUser(userdata: object) {
    return this.apiService.Request(environment.userServiceUrl, HttpReqMethod.POST.toString(), userdata);
  }

}
