import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  termsOfServicesModal: boolean;
  privacyPolicy: boolean;

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }
    );
    this.crateAccount();
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

    // create account
    crateAccount() {
        const userData = Object.assign({ email: 'test4@gmail.com', password: 'rohan'});
        this.userService.createUser(userData).subscribe(response => {
          console.log(response);
        }, (error) => '');
      }
    

}
