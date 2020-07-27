import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';
import { ValidationMessageService } from '../../services/validation.message.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validationMessage: object;
  //user: User = new User();
  getState: Observable<any>;
  isAlert = false;
  type: string;
  message = '';
  hidePassword: boolean;
  errorMessage: string | null;
  isAuthenticated: false;
  user:any;
  

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private validationMessageService: ValidationMessageService,
    private router: Router
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.getStoreState();
  }
  // create Login Form
  createLoginForm() {
    this.hidePassword = true;
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{1,}')]],
        password: ['', [Validators.required]],
      }
    );
    this.getValidationMessage();
  }

  // get validation messages
  getValidationMessage() {
    this.validationMessageService.loginValidationMessage().subscribe(response => {
      this.validationMessage = response[0].messages;
    }, (error) => { this.errorCallback(error); });
  }

  getStoreState() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.message = state.errorMessage;
    
      if (this.user) {
        this.type = 'danger';
      }
      if (this.isAuthenticated) {
        this.loginForm.reset();
      }
    });
  }

  // display server errors
  errorCallback(error: any) {
    window.scroll(0, 0);
    if (error.error.status === 403 || error.status === 404) {
      this.router.navigate(['/page-not-found']);
    } else {
      this.isAlert = true;
      this.type = 'danger';
      if(error.name == 'HttpErrorResponse'){
        this.errorMessage = "Could not connect to server";
      }else{
        this.errorMessage = error.error ? error.error : (error.message ? error.message : this.errorMessage);
      }
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

  // submit login form
  onSubmit(): void {
    if (this.loginForm.status === 'VALID') {
      const payload = {
        email: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.store.dispatch(new LogIn(payload));
    }
    else {
      this.markControlsAsTouched(this.loginForm);
    }
  }
}
