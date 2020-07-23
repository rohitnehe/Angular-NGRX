import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  termsOfServicesModal: boolean;
  privacyPolicy: boolean;

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }
    );
  }


// on click open & close function for terms of services modal window
  openTermsOfServicesModal() {
  this.termsOfServicesModal = true;
  }

  closeTermsOfServicesModal() {
    this.termsOfServicesModal = false;
  }


 // on click open & close function for privacy policy modal window
  openPrivacyPolicyModal() {
    this.privacyPolicy = true;
    }

  closePrivacyPolicyModal() {
      this.privacyPolicy = false;
    }

}
