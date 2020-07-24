import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { StaticDataService } from '../../shared/services/static.data.service';
import { Store } from '@ngrx/store';
import { User } from '../../shared/store/models/user';
import { AddUserAction } from '../../shared/store/actions/user.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  termsOfServicesModal: boolean;
  privacyPolicyModal: boolean;
  termsOfServicesTitle: string;
  privacyPolicyTitle: string;
  termsOfServices: string;
  privacyPolicy: string;

  // alert message
  message = '';
  isAlert = false;
  type: string;

  registerForm: FormGroup;
  validationMessage: object;
  hidePassword: boolean;
  hideConfirmPassword: boolean;
  user: any;
  isUserCreated:boolean

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private staticDataService: StaticDataService,
    private router: Router,
    private store: Store<User>
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
        email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{1,}')]],
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

  // get validation messages
  getValidationMessage() {
    this.userService.validationMessage().subscribe(response => {
      this.validationMessage = response[0].messages;
    }, (error) => { this.errorCallback(error) });
  }

  // create account form submit
  submit() {
    if (this.registerForm.status === 'VALID') {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      this.user = Object.assign({id: uuidv4() ,email: email, password: password });
      try {
        this.userService.createAccount(this.user).subscribe(data => {
          if (data.accessToken) {
            this.store.dispatch(new AddUserAction(this.user));
            this.isUserCreated = true;
          }
        },
          error => this.errorCallback(error));
      } catch (error) { console.log(error) }
    } else {
      this.markControlsAsTouched(this.registerForm);
    }

  }

  // Mark controls of form as touched.
  markControlsAsTouched(formRef: FormGroup) {
    for (const property in formRef.controls) {
      if (property) {
        formRef.controls[property].markAsTouched();
      }
    }
    window.scroll(0, 0);
  }

  // display server errors
  errorCallback(error: any) {
    console.log(error);
    window.scroll(0, 0);
    if (error.error.status === 403 || error.status === 404) {
      this.router.navigate(['/page-not-found']);
    } else {
      this.isAlert = true;
      this.type = 'danger';
      this.message = error.error ? error.error : (error.message ? error.message : this.message);
    }
  }

  // on click open & close function for terms of services modal window
  openTermsOfServicesModal() {
    this.staticDataService.getServiceTerms().subscribe(response => {
      this.termsOfServicesTitle = response[0].title;
      this.termsOfServices = response[0].content;
      this.termsOfServicesModal = true;
    }, (error) => { this.errorCallback(error) });
  }

  closeTermsOfServicesModal() {
    this.termsOfServicesModal = false;
  }


  // on click open & close function for privacy policy modal window
  openPrivacyPolicyModal() {
    this.staticDataService.getPrivacyPolicy().subscribe(response => {
      this.privacyPolicyTitle = response[0].title;
      this.privacyPolicy = response[0].content;
      this.privacyPolicyModal = true;
    }, (error) => { this.errorCallback(error) });
  }

  closePrivacyPolicyModal() {
    this.privacyPolicyModal = false;
  }


}
