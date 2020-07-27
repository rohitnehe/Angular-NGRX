import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';
import { UserService } from '../../services/user.service';
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

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private userService: UserService,
    private router: Router
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
      if(!state.isAuthenticated){
        this.type = 'danger';
      }
    });
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
    this.userService.loginValidationMessage().subscribe(response => {
      this.validationMessage = response[0].messages;
    }, (error) => { this.errorCallback(error); });
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
