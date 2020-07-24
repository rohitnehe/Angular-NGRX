import { Injectable } from '@angular/core';
import { HttpReqMethod, ApiService } from '../services/api.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  url: string;

  constructor(private apiService: ApiService) { }

  // validation messages for create user
  getServiceTerms() {
    return this.apiService.Request(environment.serviceUrl + 'staticContent?title=terms-of-service', HttpReqMethod.GET.toString());
  }

}
