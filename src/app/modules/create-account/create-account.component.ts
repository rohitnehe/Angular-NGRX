import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { StaticDataService } from '../../shared/services/static.data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  termsOfServicesModal: boolean;
  privacyPolicyModal: boolean;
  termsOfServices: string;
  privacyPolicy: string;
 
  // alert message
  message = '';
  isAlert = false;
  type: string;

  registerForm: FormGroup;
  validationMessage:object;
  hidePassword: boolean;
  hideConfirmPassword: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private staticDataService: StaticDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  // create account form
  createForm() {
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@$!%*#?&]+$')]],
        confirmPassword: ['', Validators.required],
      }, { validator: this.comparePassword }
    );
    this.getValidationMessage();
  }

  // compare password and confirm password
  comparePassword(group: FormGroup) {
    const pass = group.controls.password;
    const confirmPass = group.controls.confirmPassword;
    if ((pass.valid && confirmPass.valid) && (pass.value !== confirmPass.value)) {
      return { passwordNotSame: true };
    } else {
      return null;
    }
  }

  // create account
  getValidationMessage() {
    this.userService.validationMessage().subscribe(response => {
      this.validationMessage = response[0].messages;
    }, (error) => { this.errorCallback(error) });
  }


  // create account
  crateAccount() {
    const userData = Object.assign({ email: 'test4@gmail.com', password: 'rohan' });
    this.userService.createAccount(userData).subscribe(response => {
    }, (error) => {this.errorCallback(error)});
  }

  // display server errors
  errorCallback(error: any) {
    window.scroll(0, 0);
    if (error.error.status === 403 || error.status === 404) {
      this.router.navigate(['/page-not-found']);
    } else {
      this.isAlert = true;
      this.type = 'danger';
      this.message = error.message ? error.message : this.message;
    }
  }

  // on click open & close function for terms of services modal window
  openTermsOfServicesModal() {
  //   this.staticDataService.getServiceTerms().subscribe(response => {
  //  }, (error) => {this.errorCallback(error)});
   this.termsOfServicesModal = true;
  }

  closeTermsOfServicesModal() {
    this.termsOfServicesModal = false;
  }


  // on click open & close function for privacy policy modal window
  openPrivacyPolicyModal() {
    this.privacyPolicyModal = true;
  }

  closePrivacyPolicyModal() {
    this.privacyPolicyModal = false;
  }


}
