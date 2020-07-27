import { Injectable } from '@angular/core';
import { HttpReqMethod, ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  url: string;

  constructor(private apiService: ApiService) { }

  // validation terms of service
  getServiceTerms() {
    return this.apiService.Request(environment.serviceUrl + 'staticContent?key=terms-of-service', HttpReqMethod.GET.toString());
  }

  // validation terms of service
  getPrivacyPolicy() {
    return this.apiService.Request(environment.serviceUrl + 'staticContent?key=privacy-policy', HttpReqMethod.GET.toString());
  }

}
